<?php

use App\BettingCommission;
use App\Chat;
use App\Currency\Aggregator\Aggregator;
use App\Currency\Currency;
use App\Events\ChatMessage;
use App\Events\NewQuiz;
use App\Games\Kernel\Game;
use App\Games\Kernel\Module\General\HouseEdgeModule;
use App\Games\Kernel\ThirdParty\ThirdPartyGame;
use App\Investment;
use App\Settings;
use App\Token\PersonalAccessToken;
use App\Transaction;
use App\User;
use App\Utils\APIResponse;
use App\WebSocket\WebSocketWhisper;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Intervention\Image\Facades\Image;

Route::post('/whisper', function(Request $request) {
    $whisper = WebSocketWhisper::find($request->event);
    if($whisper == null) return APIResponse::reject(1);

//    $whisper->id = $request->data->id;
    $whisper->user = auth('sanctum')->user();

    $response = $whisper->process((object)$request->data);
    //$whisper->sendResponse($response);
    return APIResponse::success($response);
});

Route::post('paymentStatus', function(Request $request) {
    $aggregator = null;
    foreach(Aggregator::list() as $ag) {
        if($ag->validate($request)) {
            $aggregator = $ag;
            break;
        }
    }
    if($aggregator == null) return 'Unknown aggregator';

    return $aggregator->status($request);
});

Route::middleware('auth:sanctum')->prefix('aggregator')->group(function() {
    Route::post('all', function() {
        $result = [];
        foreach (Aggregator::list() as $aggregator)
            $result[] = [
                'id' => $aggregator->id(),
                'name' => $aggregator->name(),
                'icon' => $aggregator->icon(),
                'supports' => $aggregator->supports()
            ];
        return $result;
    });
    Route::post('invoice', function(Request $request) {
        $aggregator = Aggregator::find($request->id);
        if(!$aggregator) return APIResponse::reject(1);
        if((auth('sanctum')->user()->depositLimitBreak != null && !auth('sanctum')->user()->depositLimitBreak->isPast()) && ((auth('sanctum')->user()->depositLimitValue ?? 0) + $request->sum > auth('sanctum')->user()->depositLimit))
            return APIResponse::reject(1, "Deposit limit exceeded");

        $invoice = \App\Invoice::create([
            'user' => auth('sanctum')->user()->_id,
            'sum' => $request->sum,
            'currency' => $request->currency,
            'status' => 0,
            'type' => 'aggregator',
            'aggregator' => $aggregator->id(),
            'usd_converted' => Currency::find($request->currency)->convertTokenToFiat($request->sum)
        ]);

        return Aggregator::find($aggregator->id())->invoice($invoice);
    });
});

Route::get('walletNotify/{currency}/{txid}', function($currency, $txid) {
    Currency::find($currency)->process($txid);
    return APIResponse::success();
});

Route::get('blockNotify/{currency}/{blockId}', function($currency, $blockId) {
    Currency::find($currency)->processBlock($blockId);
    return APIResponse::success();
});

Route::post('bitgoWebhook', function() {
    $sdk = Currency::find('bg_btc')->getSDK();
    $payload = $sdk->getWebhookPayload();

    $currency = Currency::find('bg_'.$payload['coin']);
    if($currency === null) {
        Log::error('Invalid BitGo webhook currency: bg_'.$payload['coin']);
        return APIResponse::reject(1, 'Invalid request');
    }

    $result = $currency->process();
    return APIResponse::success(is_array($result) ? $result : []);
});

Route::post('leaderboard', function(Request $request) {
    $currency = Currency::find($request->currency ?? '');
    if(!$currency) return APIResponse::reject(2, 'Invalid currency');
    return APIResponse::success(\App\Leaderboard::getLeaderboard($request->positions, $request->type, $currency, $request->orderBy));
});


Route::middleware('auth:sanctum')->post('invest', function(Request $request) {
    $amount = floatval($request->amount);
    if($amount < floatval(auth('sanctum')->user()->clientCurrency()->option('min_invest')) || auth('sanctum')->user()->balance(auth('sanctum')->user()->clientCurrency())->get() < $amount) return APIResponse::reject(1);

    Investment::create([
        'user' => auth('sanctum')->user()->_id,
        'amount' => $amount - ((1 / 100) * $amount),
        'site_bankroll' =>  Investment::where('status', 0)->where('currency', auth('sanctum')->user()->clientCurrency()->id())->sum('amount') + $amount,
        'status' => 0,
        'currency' => auth('sanctum')->user()->clientCurrency()->id()
    ]);

    auth('sanctum')->user()->balance(auth('sanctum')->user()->clientCurrency())->subtract($amount, \App\Transaction::builder()->message('Investment')->get());
    return APIResponse::success();
});

Route::middleware('auth:sanctum')->post('disinvest', function(Request $request) {
    $investment = Investment::where('_id', $request->id)->first();
    if($investment == null || $investment->status != 0) return APIResponse::reject(1);

    $investment->update([
        'disinvest_profit' => $investment->getProfit(),
        'disinvest_share' => $investment->getShare(),
        'status' => 1
    ]);

    $currency = Currency::find($investment->currency);
    $profit = $investment->getProfit();
    $profit = $profit <= 0 ? $profit : $profit - ((intval($currency->option('invest_commission')) / 100) * $profit);
    if($profit <= 0) return APIResponse::reject(2);

    auth('sanctum')->user()->balance($currency)->add($profit, \App\Transaction::builder()->message('Disinvest')->get());
    return APIResponse::success();
});

Route::prefix('data')->group(function() {
    Route::middleware('auth:sanctum')->post('/rakeback', function() {
        $rakeback = [];

        foreach (Currency::all() as $currency) {
            $rakeback[] = [
                'id' => $currency->id(),
                'value' => auth('sanctum')->user()['rakeback_' . $currency->walletId()] ?? 0
            ];
        }

        return [
            'rakeback' => $rakeback,
            'percent' => floatval(Settings::get('Cashback percent', '8.8'))
        ];
    });
    Route::middleware('auth:sanctum')->post('/claimRakeback', function() {
        if(auth('sanctum')->user()->rakeback_claim != null && auth('sanctum')->user()->rakeback_claim->getTimestamp() > Carbon::now()->getTimestamp()) return APIResponse::reject(1, 'You can claim rakeback after 4 hours');

        auth('sanctum')->user()->update([
            'rakeback_claim' => Carbon::now()->addHours(4)
        ]);

        foreach (Currency::all() as $currency) {
            $value = auth('sanctum')->user()['rakeback_' . $currency->walletId()] ?? 0;

            if($value > 0) {
                auth('sanctum')->user()->update([
                    'rakeback_' . $currency->walletId() => 0
                ]);

                auth('sanctum')->user()->balance($currency)->add($value, Transaction::builder()->message('Rakeback Claim')->get());
            }
        }

        return [];
    });
    Route::post('/latestGames', function(Request $request) {
        $result = [];

        if($request->mode === 'casino') {
            switch ($request->type) {
                case 'third-party':
                    $games = \App\Game::latest()->where('demo', '!=', true)->where('user', '!=', null)->where('status', '!=', 'in-progress')->where('status', '!=', 'cancelled')->where('type', 'third-party')->take($request->count)->get()->reverse();
                    break;
                case 'mine':
                    $games = \App\Game::latest()->where('demo', '!=', true)->where('user', auth('sanctum')->user()->_id)->where('status', '!=', 'in-progress')->where('status', '!=', 'cancelled')->take($request->count)->get()->reverse();
                    break;
                case 'all':
                    $games = \App\Game::latest()->where('demo', '!=', true)->where('user', '!=', null)->where('status', '!=', 'in-progress')->where('status', '!=', 'cancelled')->take($request->count)->get()->reverse();
                    break;
                case 'lucky_wins':
                    $games = \App\Game::latest()->where('multiplier', '>=', 10)->where('demo', '!=', true)->where('user', '!=', null)->where('status', 'win')->take($request->count)->get()->reverse();
                    break;
                case 'high_rollers':
                    $hrResult = [];
                    $games = \App\Game::latest()->where('demo', '!=', true)->where('user', '!=', null)->where('status', '!=', 'in-progress')->where('status', '!=', 'cancelled')->take($request->count)->get()->reverse();
                    foreach ($games as $game) {
                        if ($game->wager < floatval(\App\Currency\Currency::find($game->currency)->option('high_roller_requirement'))) continue;
                        $hrResult[] = $game;
                    }
                    $games = $hrResult;
                    break;
            }

            foreach ($games as $game) $result[] = [
                'game' => $game->toArray(),
                'user' => User::where('_id', $game->user)->first()->toArray(),
                'metadata' => Game::find($game->game)->metadata()->toArray()
            ];
        } else if($request->mode === 'sport') {
            switch ($request->type) {
                case 'mine':
                    $games = \App\SportBet::latest()->where('demo', '!=', true)->where('user', auth('sanctum')->user()->_id)->take($request->count)->get()->reverse();
                    break;
                default:
                    $games = \App\SportBet::latest()->where('demo', '!=', true)->where('user', '!=', null)->take($request->count)->get()->reverse();
                    break;
            }

            foreach ($games as $game) $result[] = [
                'game' => $game->toArray(),
                'user' => User::where('_id', $game->user)->first()->toArray()
            ];
        }

        return APIResponse::success($result);
    });
    Route::post('/notifications', function() {
        return APIResponse::success(array_merge(\App\GlobalNotification::get()->toArray(), env('APP_DEBUG') && !str_contains(request()->url(), 'localhost') ? [[
            '_id' => '-1',
            'icon' => 'fad fa-exclamation-triangle',
            'text' => 'Debug'
        ]] : []));
    });
    Route::post('/games', function() {
        $games = [];
        foreach(Game::list() as $game) {
            $houseEdgeModule = new HouseEdgeModule($game, null, null, null);

            $games[] = [
                'type' => $game instanceof ThirdPartyGame ? $game->provider() : 'Originals',
                'isDisabled' => $game->isDisabled(),
                'isPlaceholder' => $game->metadata()->isPlaceholder(),
                'name' => $game->metadata()->name(),
                'id' => $game->metadata()->id(),
                'icon' => $game->metadata()->icon(),
                'category' => $game->metadata()->category(),
                'image' => $game->metadata()->image(),
                'houseEdge' => !\App\Modules::get($game, false)->isEnabled($houseEdgeModule) ? null : floatval(\App\Modules::get($game, false)->get($houseEdgeModule, 'house_edge_option'))
            ];
        }
        return APIResponse::success($games);
    });
    Route::post('/currencies', function() {
        return APIResponse::success(Currency::toCurrencyArray(Currency::all()));
    });
    Route::post('/country', function() {
        $reader = new MaxMind\Db\Reader(base_path('storage/mmdb/GeoLite2-Country.mmdb'));
        $result = $reader->get(User::getIp());
        if($result == null) return APIResponse::reject(1, 'Unknown IP address');
        return APIResponse::success(['country' => $result['country']['iso_code']]);
    });
});

Route::middleware('auth')->post('bonusBalance', function() {
    return auth('sanctum')->user()->balance(auth('sanctum')->user()->clientCurrency())->bonusBalances();
});

Route::post('/profile/getUser', function(Request $request) {
    $user = User::where('_id', $request->id)->first();
    if(!$user) return APIResponse::reject(1, 'Unknown user');

    $isOwner = !auth('sanctum')->guest() && auth('sanctum')->user()->_id === $user->_id;
    if($isOwner) {
        $tfa = $user->tfa();
        $secret = $tfa->createSecret(160);
    }

    return APIResponse::success(array_merge([
        'user' => $user->toArray(),
        'vipLevel' => $user->vipLevel(),
        'wagered' => $user->wagered(),
        'games' => $user->games()
    ], $isOwner ? [
        'secret' => $secret,
        'qr' => $tfa->getQRText('betdino.io', $secret)
    ] : []));
});

Route::middleware('auth:sanctum')->prefix('investment')->group(function() {
    Route::post('history', function() {
        $out = [];
        foreach(Investment::where('user', auth('sanctum')->user()->_id)->orderBy('status', 'asc')->latest()->get() as $investment)
            array_push($out, [
                'amount' => $investment->amount,
                'share' => $investment->status == 1 ? $investment->disinvest_share : $investment->getRealShare($investment->getProfit(), Investment::getGlobalBankroll(\App\Currency\Currency::find($investment->currency))),
                'profit' => $investment->getProfit() <= 0 ? 0 : $investment->getProfit(),
                'status' => $investment->status,
                'id' => $investment->_id,
                'currency' => $investment->currency
            ]);
        return APIResponse::success($out);
    });
    Route::post('stats', function() {
        $currency = auth('sanctum')->user()->clientCurrency();
        $userBankroll = Investment::getUserBankroll($currency, auth('sanctum')->user());
        $globalBankroll = Investment::getGlobalBankroll($currency);

        $userBankrollShare = 0;
        foreach(Investment::where('user', auth('sanctum')->user()->_id)->where('currency', $currency->id())->where('status', 0)->get() as $investment)
            $userBankrollShare += $investment->getRealShare($investment->getProfit(), $globalBankroll);

        return APIResponse::success([
            'your_bankroll' => auth('sanctum')->user()->getInvestmentProfit($currency, false),
            'your_bankroll_percent' => $userBankroll == 0 || $globalBankroll == 0 ? 0 : $userBankroll / $globalBankroll * 100,
            'your_bankroll_share' => $userBankrollShare,
            'investment_profit' => auth('sanctum')->user()->getInvestmentProfit($currency, true, false),
            'site_bankroll' => $globalBankroll,
            'site_profit' => Investment::getSiteProfitSince($currency, Carbon::minValue()),
            'site_profit_all_time_high' => floatval(Settings::get('investmentAllTimeProfitHigh:'.$currency->walletId(), '0.00000000')),
            'site_fee_taken' => floatval(Settings::get('investmentAllTimeProfitHigh:'.$currency->walletId(), '0.00000000'))
        ]);
    });
});

Route::middleware('auth:sanctum')->prefix('wallet')->group(function() {
    Route::post('exchange', function(Request $request) {
        if(!auth('sanctum')->user()->validate2FA(false)) return APIResponse::invalid2FASession();
        auth('sanctum')->user()->reset2FAOneTimeToken();

        $currencyFrom = Currency::find($request->from);
        $currencyTo = Currency::find($request->to);

        if(!$currencyFrom || !$currencyTo) return APIResponse::reject(1, 'Invalid currency');

        $amount = floatval($request->amount);

        if(auth()->user()->balance($currencyFrom)->get() < $amount) return APIResponse::reject(2, 'Invalid amount');

        auth()->user()->balance($currencyFrom)->subtract($amount, Transaction::builder()->message('Exchange')->get());
        auth()->user()->balance($currencyTo)->add($currencyTo->convertFiatToToken($currencyFrom->convertTokenToFiat($amount)), Transaction::builder()->message('Exchange')->get());

        return APIResponse::success();
    });
    Route::prefix('history')->group(function() {
        Route::post('deposits', function(Request $request) {
            return APIResponse::success(\App\Invoice::where('user', auth()->user()->_id)->latest()->get()->toArray());
        });
        Route::post('withdraws', function(Request $request) {
            return APIResponse::success(\App\Withdraw::where('user', auth()->user()->
            _id)->latest()->get()->toArray());
        });
    });

    Route::post('getDepositWallet', function(Request $request) {
        $currency = Currency::find($request->currency);
        $wallet = auth('sanctum')->user()->depositWallet($currency);
        if($currency == null || !$currency->isRunning() || $wallet === 'Error') return APIResponse::reject(1);
        return APIResponse::success([
            'currency' => $request->currency,
            'wallet' => $wallet
        ]);
    });
    Route::post('withdraw', function(Request $request) {
        if(!auth('sanctum')->user()->validate2FA(false)) return APIResponse::invalid2FASession();
        auth('sanctum')->user()->reset2FAOneTimeToken();

        $currency = Currency::find($request->currency);

        $vip = (new \App\VIP\VIP())->level(auth('sanctum')->user()->vipLevel());
        $fee = ($vip->withdrawFee / 100) * $request->sum;

        if($request->sum < floatval($currency->option('minWithdraw')) || $request->sum > $vip->maxWithdrawal) return APIResponse::reject(1, "Invalid withdraw value");
        if(auth('sanctum')->user()->balance($currency)->get() < $request->sum) return APIResponse::reject(2, 'Not enough balance');
        if(\App\Withdraw::where('user', auth('sanctum')->user()->_id)->where('status', 0)->count() > 0) return APIResponse::reject(3, 'Moderation is still in process');

        if (auth('sanctum')->user()->withdraw_limit_reset == null || auth('sanctum')->user()->withdraw_limit_reset->isPast()) {
            auth('sanctum')->user()->update([
                'withdraw_limit_reset' => Carbon::now()->addHours(24)->format('Y-m-d H:i:s'),
                'withdraw_limit' => 0
            ]);
        }

        if (auth('sanctum')->user()->withdraw_limit != null && auth('sanctum')->user()->withdraw_limit >= (new \App\VIP\VIP())->level(auth('sanctum')->user()->vipLevel())->numberOfWithdrawals) return APIResponse::reject(5, 'Withdraw timeout');
        auth('sanctum')->user()->update([
            'withdraw_limit' => auth('sanctum')->user()->promocode_limit == null ? 1 : auth('sanctum')->user()->withdraw_limit + 1
        ]);

        auth('sanctum')->user()->balance($currency)->subtract($request->sum, \App\Transaction::builder()->message('Withdraw')->get());

        \App\Withdraw::create([
            'user' => auth('sanctum')->user()->_id,
            'sum' => $request->sum - $fee,
            'sum_original' => $request->sum,
            'currency' => $currency->id(),
            'address' => $request->wallet,
            'status' => 0,
            'type' => $request->type,
            'usd_converted' => $currency->convertTokenToFiat($request->sum - $fee),

            'whatsApp' => $request->whatsApp,
            'cpf' => $request->cpf,
            'pixType' => $request->pixType,
            'chavePix' => $request->chavePix
        ]);

        return APIResponse::success();
    });
    Route::post('cancel_withdraw', function(Request $request) {
        $withdraw = \App\Withdraw::where('_id', $request->id)
        ->where('user', auth('sanctum')->user()->_id)->where('status', 0)->first();
        if($withdraw == null) return APIResponse::reject(1, 'Hacking attempt');
        if($withdraw->auto) return APIResponse::reject(2, 'Auto-withdrawals cannot be cancelled');
        $withdraw->update([
            'status' => 4
        ]);
        auth('sanctum')->user()->balance(Currency::find($withdraw->currency))
        ->add($withdraw->sum_original, \App\Transaction::builder()
        ->message('Withdraw cancellation')->get());
        return APIResponse::success();
    });
});

Route::middleware('auth:sanctum')->prefix('subscription')->group(function() {
    Route::post('update', function(Request $request) {
        $request->validate([
            'endpoint' => 'required'
        ]);

        auth('sanctum')->user()->updatePushSubscription(
            $request->endpoint,
            $request->publicKey,
            $request->authToken,
            $request->contentEncoding
        );

        if(auth('sanctum')->user()->notification_bonus != true) {
            auth('sanctum')->user()->update([
                'notification_bonus' => true
            ]);

//            auth('sanctum')->user()->balance(auth('sanctum')->user()->clientCurrency())->add(floatval(auth('sanctum')->user()->clientCurrency()->option('referral_bonus')), \App\Transaction::builder()->message('Notification subscription bonus')->get());
        }
        return APIResponse::success();
    });
});

Route::prefix('user')->group(function() {
    Route::post('markGameAsFavorite', function(Request $request) {
        $games = auth('sanctum')->user()->favoriteGames ?? [];
        if(in_array($request->id, $games)) unset($games[array_search($request->id, $games)]);
        else array_push($games, $request->id);
        auth('sanctum')->user()->update([
            'favoriteGames' => $games
        ]);
    });
    Route::post('graph', function(Request $request) {
        $data = [];
        $currency = Currency::find($request->currency);
        $user = User::where('_id', $request->user)->first();

        if($currency == null || $user == null) return APIResponse::reject(1, 'Invalid parameters');

        if($request->interval === 'today') {
            $hours = 0;
            for($i = 0; $i <= 23; $i++) {
                if (Carbon::now()->timestamp < Carbon::today()->addHours($i)->timestamp) continue;
                $hours++;
            }

            for($i = 0; $i <= $hours; $i++) {
                array_push($data, [
                    'x' => count($data) + 1,
                    'y' => Investment::getUserProfit($currency, Carbon::minValue(), $user, now()->subHours($hours - $i))
                ]);
            }
        } else {
            for($i = 1; $i <= intval($request->interval); $i++) {
                array_push($data, [
                    'x' => count($data) + 1,
                    'y' => Investment::getUserProfit($currency, Carbon::minValue(), $user, now()->subDays(intval($request->interval) - $i))
                ]);
            }
        }

        return APIResponse::success($data);
    });
    Route::get('sportGames/{id}/{page}/{type}', function($id, $page, $type) {
        $p = [];
        foreach (\App\SportBet::latest()->where('user', $id)->where('status', $type === 'ongoing' ? '=' : '!=', 'ongoing')->skip(intval($page) * 15)->take(15)->get() as $game)
            array_push($p, $game->toArray());
        return APIResponse::success($p);
    });
    Route::get('games/{id}/{page}', function($id, $page) {
        $p = [];
        foreach(\App\Game::orderBy('id', 'desc')->where('demo', '!=', true)->where('user', $id)->where('status', '!=', 'in-progress')->where('status', '!=', 'cancelled')->skip(intval($page) * 15)->take(15)->get() as $game) {
            array_push($p, [
                'game' => $game->toArray(),
                'metadata' => Game::find($game->game)->metadata()->toArray()
            ]);
        }
        return APIResponse::success($p);
    });
});

Route::middleware('auth:sanctum')->prefix('game')->group(function() {
    Route::post('find', function(Request $request) {
        $game = \App\Game::where('id', intval($request->id))->first();
        if($game == null) return APIResponse::reject(1, 'Unknown ID ' . $request->id);
        return APIResponse::success([
            'id' => $game->_id,
            'game' => $game->game
        ]);
    });
});

Route::middleware('auth:sanctum')->prefix('user')->group(function() {
    Route::post('bonusTransactions', function() {
        $result = [];

        foreach (\App\AffiliateLog::where('user', auth('sanctum')->user()->_id)->get() as $affiliateLog) {
            $result[] = [
                'user' => User::where('_id', $affiliateLog->referrer)->first()->toArray(),
                'amount' => $affiliateLog->amount,
                'currency' => $affiliateLog->currency,
                'type' => $affiliateLog->type,
                'date' => $affiliateLog->created_at
            ];
        }

        return APIResponse::success($result);
    });
    Route::post('affiliates', function() {
        $result = [];
        $number = 0;

        $wageredTotal = 0;
        $depositedTotal = 0;

        foreach (\App\User::where('referral', auth('sanctum')->user()->id)->get() as $user) {
            $number++;

            $wagered = $user->wagered();
            $deposited = $user->deposited();

            $wageredTotal += $wagered;
            $depositedTotal += $deposited;

            $result[] = [
                'user' => $user->toArray(),
                'done' => in_array($user->_id, auth('sanctum')->user()->referral_wager_obtained ?? []),
                'deposited' => $deposited,
                'wagered' => $wagered
            ];
        }
        return APIResponse::success([
            'affiliates' => $result,
            'total' => $number,
            'bonus' => count(auth('sanctum')->user()->referral_wager_obtained ?? []),
            'wageredTotal' => $wageredTotal,
            'depositedTotal' => $depositedTotal
        ]);
    });
    Route::post('find', function(Request $request) {
        $user = User::where('name', 'like', "%{$request->name}%")->first();
        if($user == null) return APIResponse::reject(1, 'Unknown username');
        return APIResponse::success(['id' => $user->_id]);
    });
    Route::post('ignore', function(Request $request) {
        $user = User::where('name', 'like', "%{$request->name}%")->first();
        if($user == null || $user->_id === auth('sanctum')->user()->_id) return APIResponse::reject(1, 'Unknown username');

        $ignore = auth('sanctum')->user()->ignore ?? [];
        if(in_array($user->_id, $ignore)) return APIResponse::reject(2, 'Already ignored');

        array_push($ignore, $user->_id);
        auth('sanctum')->user()->update(['ignore' => $ignore]);
        return APIResponse::success(['id' => $user->_id]);
    });
    Route::post('unignore', function(Request $request) {
        $user = User::where('name', 'like', "%{$request->name}%")->first();
        if($user == null) return APIResponse::reject(1, 'Unknown username');

        $ignore = auth('sanctum')->user()->ignore ?? [];
        if(!in_array($user->_id, $ignore)) return APIResponse::reject(2, 'User is not ignored');

        $index = array_search($user->_id, $ignore);
        unset($ignore[$index]);
        auth('sanctum')->user()->update(['ignore' => $ignore]);
        return APIResponse::success(['id' => $user->_id]);
    });
    Route::post('changePassword', function(Request $request) {
        $request->validate([
            'new' => ['required', 'string', 'min:8']
        ]);

        if(!auth('sanctum')->user()->validate2FA(false)) return APIResponse::invalid2FASession();
        auth('sanctum')->user()->reset2FAOneTimeToken();

        if(!Hash::check($request->old, auth('sanctum')->user()->password)) return APIResponse::reject(1, 'Invalid old password');

        auth('sanctum')->user()->update(['password' => Hash::make($request->new)]);
        return APIResponse::success();
    });
    Route::post('updateEmail', function(Request $request) {
        if(filter_var($request->email, FILTER_VALIDATE_EMAIL) === false) return APIResponse::reject(1, 'Invalid email');

        if(!auth('sanctum')->user()->validate2FA(false)) return APIResponse::invalid2FASession();
        auth('sanctum')->user()->reset2FAOneTimeToken();

        auth('sanctum')->user()->update(['email' => $request->email]);
        return APIResponse::success();
    });
    Route::post('client_seed_change', function(Request $request) {
        $request->validate([
            'client_seed' => ['required', 'string', 'min:1']
        ]);

        auth('sanctum')->user()->update([
            'client_seed' => $request->client_seed
        ]);
        return APIResponse::success();
    });
    Route::post('name_change', function(Request $request) {
        $request->validate([
            'name' => ['required', 'unique:users', 'string', 'max:12', 'regex:/^\S*$/u']
        ]);

        if(!auth('sanctum')->user()->validate2FA(false)) return APIResponse::invalid2FASession();
        auth('sanctum')->user()->reset2FAOneTimeToken();

        $history = auth('sanctum')->user()->name_history;
        array_push($history, [
            'time' => Carbon::now(),
            'name' => $request->name
        ]);

        auth('sanctum')->user()->update([
            'name' => $request->name,
            'name_history' => $history
        ]);
        return APIResponse::success();
    });
    Route::post('2fa_validate', function() {
        if((auth('sanctum')->user()->tfa_enabled ?? false) == false) return APIResponse::reject(1, '2FA is disabled');
        $client = auth('sanctum')->user()->tfa();
        if(request('code') == null || $client->verifyCode(auth('sanctum')->user()->tfa, request('code')) !== true) return APIResponse::reject(2, 'Invalid 2fa code');

        auth('sanctum')->user()->update([
            'tfa_onetime_key' => now()->addSeconds(15),
            'tfa_persistent_key' => now()->addDays(1)
        ]);

        return APIResponse::success();
    });
    Route::post('2fa_enable', function() {
        if(auth('sanctum')->user()->tfa_enabled ?? false) return APIResponse::reject(1, 'Hacking attempt');
        $client = auth('sanctum')->user()->tfa();

        if(request('2faucode') == null || $client->verifyCode(request('2facode'), request('2faucode')) !== true) return APIResponse::reject(2, 'Invalid 2fa code');

        auth('sanctum')->user()->update([
            'tfa_enabled' => true,
            'tfa' => request('2facode')
        ]);
        return APIResponse::success();
    });
    Route::post('2fa_disable', function() {
        if(!auth('sanctum')->user()->validate2FA(false)) return APIResponse::invalid2FASession();
        auth('sanctum')->user()->update([
            'tfa_enabled' => false,
            'tfa' => null
        ]);
        auth('sanctum')->user()->reset2FAOneTimeToken();
        return APIResponse::success();
    });
});

Route::middleware('auth:sanctum')->prefix('notifications')->group(function() {
    Route::post('mark', function(Request $request) {
        auth('sanctum')->user()->notifications()->where('id', $request->id)->first()->markAsRead();
        return APIResponse::success();
    });
    Route::post('unread', function() {
        return APIResponse::success([
            'notifications' => auth('sanctum')->user()->unreadNotifications()->get()->toArray()
        ]);
    });
});

Route::middleware('auth:sanctum')->prefix('settings')->group(function() {
    Route::get('privacy_toggle', function() {
        auth('sanctum')->user()->update([
            'private_profile' => auth('sanctum')->user()->private_profile ? false : true
        ]);
        return APIResponse::success();
    });
    Route::get('privacy_bets_toggle', function() {
        auth('sanctum')->user()->update([
            'private_bets' => auth('sanctum')->user()->private_bets ? false : true
        ]);
        return APIResponse::success();
    });
    Route::post('avatar', function(Request $request) {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,svg|max:2048'
        ]);

        $path = auth('sanctum')->user()->_id.time();
        $request->image->move(public_path('img/avatars'), $path.'.'.$request->image->getClientOriginalExtension());

        $img = Image::make(public_path('img/avatars/'.$path.'.'.$request->image->getClientOriginalExtension()));
        $img->resize(100, 100);
        $img->encode('jpg', 75);
        $img->save(public_path('img/avatars/'.$path.'.jpg'), 75, 'jpg');

        auth('sanctum')->user()->update([
            'avatar' => '/img/avatars/'.$path.'.jpg'
        ]);
        return APIResponse::success();
    });
});

Route::prefix('chat')->group(function() {
    Route::post('history', function(Request $request) {
        $history = Chat::latest()->limit(35)->where('channel', $request->channel)->where('deleted', '!=', true)->get()->toArray();

        foreach ($history as $key => $value) {
            $history[$key]['liked'] = \App\ChatMessageLike::where('message', $value['_id'])->count();
            $history[$key]['likedByUser'] = auth('sanctum')->guest() ? false : \App\ChatMessageLike::where('user', auth('sanctum')->user()->_id)->where('message', $value['_id'])->exists();
        }

        if(Settings::get('quiz_active') === 'true')
            array_unshift($history, [
                "data" => [
                    "question" => Settings::get('quiz_question'),
                ],
                "type" => "quiz"
            ]);
        return APIResponse::success($history);
    });

    Route::post('like', function(Request $request) {
        $id = auth('sanctum')->user()->_id;

        if(\App\ChatMessageLike::where('message', $request->id)->where('user', $id)->exists()) {
            \App\ChatMessageLike::where('message', $request->id)->where('user', $id)->delete();
        } else \App\ChatMessageLike::create([
            'user' => $id,
            'message' => $request->id
        ]);

        event(new \App\Events\ChatMessageLike([
            'id' => $request->id,
            'likes' => \App\ChatMessageLike::where('message', $request->id)->count()
        ]));
        return APIResponse::success();
    });
});

Route::middleware('auth:sanctum')->prefix('chat')->group(function() {
    Route::middleware('moderator')->prefix('moderate')->group(function() {
        Route::post('/quiz', function(Request $request) {
            Settings::set('quiz_question', $request->question);
            Settings::set('quiz_answer', $request->answer);
            Settings::set('quiz_active', 'true');
            Settings::set('quiz_created_by', auth('sanctum')->user()->name);

            event(new NewQuiz($request->question));
            return APIResponse::success();
        });
        Route::post('/removeAllFrom', function(Request $request) {
            $messages = Chat::where('user', 'like', "%{$request->id}%")->get();
            Chat::where('user', 'like', "%{$request->id}%")->update([
                'deleted' => true
            ]);

            $ids = [];
            foreach ($messages as $message) array_push($ids, $message->_id);
            event(new \App\Events\ChatRemoveMessages($ids));
            (new \App\ActivityLog\ChatClearLog())->insert(['type' => 'all', 'id' => $message->user['_id']]);
            return APIResponse::success($ids);
        });
        Route::post('/removeMessage', function(Request $request) {
            $message = Chat::where('_id', $request->id)->first();
            $message->update([
                'deleted' => true
            ]);
            event(new \App\Events\ChatRemoveMessages([$request->id]));
            (new \App\ActivityLog\ChatClearLog())->insert(['type' => 'one', 'message' => $message->data, 'id' => $message->user['_id']]);
            return APIResponse::success();
        });
        Route::post('/mute', function(Request $request) {
            \App\User::where('_id', $request->id)->update([
                'mute' => Carbon::now()->addMinutes($request->minutes)->format('Y-m-d H:i:s')
            ]);
            (new \App\ActivityLog\MuteLog())->insert(['id' => $request->id, 'minutes' => $request->minutes]);
            return APIResponse::success();
        });
    });
    Route::post('tip', function(Request $request) {
        $user = User::where('name', 'like', str_replace('.', '', $request->user).'%')->first();
        if($user == null || $user->name === auth('sanctum')->user()->name) return APIResponse::reject(1);
        if(floatval($request->amount) < floatval(auth('sanctum')->user()->clientCurrency()->option('quiz')) || auth('sanctum')->user()->balance(auth('sanctum')->user()->clientCurrency())->get() < floatval($request->amount)) return APIResponse::reject(2);
        auth('sanctum')->user()->balance(auth('sanctum')->user()->clientCurrency())->subtract(floatval($request->amount), \App\Transaction::builder()->message('Tip to '.$user->_id)->get());
        $user->balance(auth('sanctum')->user()->clientCurrency())->add(floatval($request->amount), \App\Transaction::builder()->message('Tip from '.auth('sanctum')->user()->_id)->get());
        $user->notify(new \App\Notifications\TipNotification(auth('sanctum')->user(), auth('sanctum')->user()->clientCurrency(), number_format(floatval($request->amount), 8, '.', '')));
        if(filter_var($request->public, FILTER_VALIDATE_BOOLEAN)) {
            $message = Chat::create([
                'data' => [
                    'to' => $user->toArray(),
                    'from' => auth('sanctum')->user()->toArray(),
                    'amount' => number_format(floatval($request->amount), 8, '.', ''),
                    'currency' => auth('sanctum')->user()->clientCurrency()->id()
                ],
                'type' => 'tip',
                'vipLevel' => auth('sanctum')->user()->vipLevel(),
                'channel' => $request->channel
            ]);

            event(new ChatMessage($message));
        }
        return APIResponse::success();
    });
    Route::post('rain', function(Request $request) {
        $usersLength = intval($request->users);
        if($usersLength < 5 || $usersLength > 25) return APIResponse::reject(1, 'Invalid users length');
        if(auth('sanctum')->user()->balance(auth('sanctum')->user()->clientCurrency())->get() < floatval($request->amount) || floatval($request->amount) < floatval(auth('sanctum')->user()->clientCurrency()->option('rain')) / 3) return APIResponse::reject(2);
        auth('sanctum')->user()->balance(auth('sanctum')->user()->clientCurrency())->subtract(floatval($request->amount), \App\Transaction::builder()->message('Rain')->get());

        $all = \App\ActivityLog\ActivityLogEntry::onlineUsers()->toArray();
        if(count($all) < $usersLength) {
            $a = User::get()->toArray();
            shuffle($a);
            $all += $a;
        }

        shuffle($all);

        $dub = []; $users = [];
        foreach ($all as $user) {
            $user = User::where('_id', $user['_id'])->first();
            if($user['_id'] == auth('sanctum')->user()->_id || $user == null || in_array($user['_id'], $dub)) continue;
            array_push($dub, $user['_id']);
            array_push($users, $user);
        }

        $users = array_slice($users, 0, $usersLength);
        $result = [];

        foreach ($users as $user) {
            $user->balance(auth('sanctum')->user()->clientCurrency())->add(floatval($request->amount) / $usersLength, \App\Transaction::builder()->message('Rain')->get());
            array_push($result, $user->toArray());
        }

        $message = Chat::create([
            'data' => [
                'users' => $result,
                'reward' => floatval($request->amount) / $usersLength,
                'currency' => auth('sanctum')->user()->clientCurrency()->id(),
                'from' => auth('sanctum')->user()->toArray()
            ],
            'type' => 'rain',
            'vipLevel' => auth('sanctum')->user()->vipLevel(),
            'channel' => $request->channel
        ]);

        event(new ChatMessage($message));
        return APIResponse::success();
    });
    Route::post('link_game', function(Request $request) {
        if(auth('sanctum')->user()->mute != null && !auth('sanctum')->user()->mute->isPast()) return APIResponse::reject(2, 'Banned');

        $game = \App\Game::where('_id', $request->id)->first();
        if($game == null) return APIResponse::reject(1, 'Invalid game id');
        if($game->status === 'in-progress' || $game->status === 'cancelled') return APIResponse::reject(2, 'Tried to link unfinished extended game');

        $message = Chat::create([
            'user' => auth('sanctum')->user()->toArray(),
            'vipLevel' => auth('sanctum')->user()->vipLevel(),
            'data' => array_merge($game->toArray(), ['icon' => Game::find($game->game)->metadata()->icon()]),
            'type' => 'game_link',
            'channel' => $request->channel
        ]);

        event(new \App\Events\ChatMessage($message));
        return APIResponse::success([]);
    });
});

Route::middleware('auth:sanctum')->prefix('promocode')->group(function() {
    Route::post('verifyVkGroup', function() {
        $arr = json_decode(file_get_contents("https://api.vk.com/method/groups.isMember?access_token=".Settings::get('vk_group_access_token')."&group_id=".Settings::get('vk_group_id')."&user_id="
            . auth('sanctum')->user()->vk . "&v=5.103"), true);
        $subscribed = isset($arr['error']) ? false : $arr['response'] === 1;
        return APIResponse::success([
            'subscribed' => $subscribed
        ]);
    });
    Route::post('activate', function(Request $request) {
        $promocode = \App\Promocode::where('code', $request->code)->first();
        if($promocode == null) return APIResponse::reject(1, 'Invalid promocode');
        if($promocode->expires->timestamp != Carbon::minValue()->timestamp && $promocode->expires->isPast()) return APIResponse::reject(2, 'Expired (time)');
        if($promocode->usages != -1 && $promocode->times_used >= $promocode->usages) return APIResponse::reject(3, 'Expired (usages)');
        if(($promocode->vip ?? false) && auth('sanctum')->user()->vipLevel() == 0) return APIResponse::reject(7, 'VIP only');
        if(in_array(auth('sanctum')->user()->_id, $promocode->used)) return APIResponse::reject(4, 'Already activated');
        if(auth('sanctum')->user()->balance(auth('sanctum')->user()->clientCurrency())->get() > floatval(auth('sanctum')->user()->clientCurrency()->option('withdraw')) / 2) return APIResponse::reject(8, 'Invalid balance');

        if(auth('sanctum')->user()->vipLevel() < 3 || ($promocode->vip ?? false) == false) {
            if (auth('sanctum')->user()->promocode_limit_reset == null || auth('sanctum')->user()->promocode_limit_reset->isPast()) {
                auth('sanctum')->user()->update([
                    'promocode_limit_reset' => Carbon::now()->addHours(auth('sanctum')->user()->vipLevel() >= 5 ? 6 : 12)->format('Y-m-d H:i:s'),
                    'promocode_limit' => 0
                ]);
            }

            if (auth('sanctum')->user()->promocode_limit != null && auth('sanctum')->user()->promocode_limit >= (auth('sanctum')->user()->vipLevel() >= 2 ? 8 : 5)) return APIResponse::reject(5, 'Promocode timeout');
        }

        if(auth('sanctum')->user()->vipLevel() < 3 || ($promocode->vip ?? false) == false) {
            auth('sanctum')->user()->update([
                'promocode_limit' => auth('sanctum')->user()->promocode_limit == null ? 1 : auth('sanctum')->user()->promocode_limit + 1
            ]);
        }

        $used = $promocode->used;
        array_push($used, auth('sanctum')->user()->_id);

        $promocode->update([
            'times_used' => $promocode->times_used + 1,
            'used' => $used
        ]);

        auth('sanctum')->user()->balance(Currency::find($promocode->currency))->add($promocode->sum, \App\Transaction::builder()->message('Promocode')->get());
        return APIResponse::success();
    });

    Route::post('demo', function() {
        if(auth('sanctum')->user()->balance(auth('sanctum')->user()->clientCurrency())->demo()->get() > auth('sanctum')->user()->clientCurrency()->minBet()) return APIResponse::reject(1, 'Demo balance is higher than zero');
        auth('sanctum')->user()->balance(auth('sanctum')->user()->clientCurrency())->demo()->add(auth('sanctum')->user()->clientCurrency()->option('demo'), \App\Transaction::builder()->message('Demo')->get());
        return APIResponse::success();
    });

    Route::post('bonus', function() {
       // if(auth('sanctum')->user()->bonus_claim != null && !auth('sanctum')->user()->bonus_claim->isPast()) return APIResponse::reject(1, 'Timeout');
        if(auth('sanctum')->user()->balance(auth('sanctum')->user()->clientCurrency())->get() > auth('sanctum')->user()->clientCurrency()->convertFiatToToken(1)) return APIResponse::reject(2, 'Balance is greater than zero');

        $brl = (new \App\Currency\Local\BRL());

        $slices = [
            [40, 1],
            [30, 3],
            [21, 5],
            [15, 18],
            [15, 38],
            [7, 58],
            [0.80, 68],
            [0.50, 99],
            [0.35, 102],
            [0.20, 110],
            [0.05, 777]
        ];

        $slice = 0;

        foreach ($slices as $index => $bonusData) {
            if(mt_rand(1, 101) / 100 < $bonusData[0] / 100) {
                $slice = $index;
                break;
            }
        }

        auth('sanctum')->user()->balance($brl)->add($slices[$slice][1], \App\Transaction::builder()->message('Faucet')->get());
        auth('sanctum')->user()->update(['bonus_claim' => Carbon::now()->addMinutes(20)]);

        return APIResponse::success([
            'slice' => $slice,
            'next' => Carbon::now()->addMinutes(20)->timestamp
        ]);
    });
});

Route::post('banner', function() {
    return APIResponse::success([
        'enabled' => Settings::get('[Banner] Enabled', 'false', true) === 'true',
        'title' => Settings::get('[Banner] Title', 'Banner Title', true),
        'image' => Settings::get('[Banner] Image URL', 'https://phoenix-gambling.com/images/phoenixCasino/phoenix_default.png', true),
        'content' => Settings::get('[Banner] Content', "<div>This text will show for everyone after page is loaded.</div>
<div><a href=\"https://example.com\">You can insert links</a> and other HTML elements.</div>", true)
    ]);
});

Route::middleware('auth:sanctum')->post('affiliateStats', function() {
    $user = auth('sanctum')->user();

    $leaderboard = [ // TODO: Create AffiliateLeaderboard
        'first' => null,
        'second' => null,
        'third' => null
    ];

    $log = [];
    foreach (\App\AffiliateLog::latest()->limit(5)->get() as $recent) {
        $log[] = [
            'user' => User::where('_id', $recent->user)->first()->toArray(),
            'data' => $recent->toArray()
        ];
    }

    return APIResponse::success([
        'betting_commission_today' => \App\BettingCommission::where('created_at', '>=' , Carbon::today())->where('user', $user->_id)->sum('brl_amount'),
        'betting_commission_yesterday' => \App\BettingCommission::where('created_at', '>=', Carbon::yesterday())->where('created_at', '<=' , Carbon::today())->where('user', $user->_id)->sum('brl_amount'),
        'betting_commission_total' => \App\BettingCommission::where('user', $user->_id)->sum('brl_amount'),
        'invitation_bonus_today' => \App\AffiliateLog::where('created_at', '>=' , Carbon::today())->where('user', $user->_id)->where('type', 'activity_bonus')->sum('amount'),
        'invitation_bonus_yesterday' => \App\AffiliateLog::where('created_at', '>=', Carbon::yesterday())->where('created_at', '<=' , Carbon::today())->where('user', $user->_id)->where('type', 'activity_bonus')->sum('amount'),
        'invitation_bonus_total' => \App\AffiliateLog::where('user', $user->_id)->where('type', 'activity_bonus')->sum('amount'),
        'deposit_bonus' => \App\AffiliateLog::where('user', $user->_id)->where('type', 'deposit_fee')->sum('amount'),
        'activeReferrals' => count(auth('sanctum')->user()->referral_wager_obtained ?? []),
        'totalTodayInviteBonus' => \App\AffiliateLog::where('created_at', '>=', Carbon::today())->where('type', 'activity_bonus')->sum('amount'),
        'totalTodayBettingCommission' => BettingCommission::where('created_at', '>=', Carbon::today())->sum('brl_amount'),
        'leaderboard' => $leaderboard,
        'recentLog' => $log
    ]);
});

Route::post('affiliateLeaderboard', function() {
    $leaderboard = \App\AffiliateLeaderboard::orderBy('sum', 'desc')->take(3)->get();

    foreach ($leaderboard as $entry)
        $entry['user'] = User::where('_id', $entry['user'])->first()->toArray();

    return $leaderboard;
});

Route::post('vip', function() {
    $result = [];

    for($i = 0; $i <= 10; $i++) {
        $level = (new \App\VIP\VIP())->level($i);

        $result[] = [
            'level' => $i,
            'name' => $level->name,
            'oneTimeBonus' => $level->oneTimeBonus,
            'withdrawFee' => $level->withdrawFee,
            'maxWithdrawal' => $level->maxWithdrawal,
            'numberOfWithdrawals' => $level->numberOfWithdrawals,
            'wagerRequirement' => $level->wagerRequirement,
            'depositRequirement' => $level->depositRequirement,
            'referralDepositFee' => $level->referralDepositFee,
            'inviteBonus' => $level->inviteBonus,
            'monthlyFreeWithdrawalAmount' => $level->monthlyFreeWithdrawalAmount
        ];
    }

    if(auth('sanctum')->user() != null) {
        $user = auth('sanctum')->user();

        $result[] = [
            'type' => 'data',
            'wagered' => $user->wagered(),
            'deposited' => $user->deposited()
        ];
    }

    return APIResponse::success($result);
});

Route::post('claimOneTimeVipBonus', function(Request $request) {
    $level = $request->level;
    $user = auth('sanctum')->user();

    if($user->vipLevel() < $level) return APIResponse::reject(1, 'Level is not obtained');
    if(isset($user->toArray()['vip_' . + $level . '_bonus_claimed'])) return APIResponse::reject(2, 'Already obtained');

    $user->update(['vip_' . $level . '_bonus_claimed' => true]);
    $user->balance(new \App\Currency\Local\BRL())->add((new \App\VIP\VIP())->level($level)->oneTimeBonus, \App\Transaction::builder()->message('VIP one-time bonus')->get());

    return APIResponse::success();
});

Route::post('break', function(Request $request) {
    $hours = $request->hours;
    if($hours < 24 || $hours > 24 * 30) return APIResponse::reject(1, 'Invalid time');
    if(auth('sanctum')->user()->break != null && !auth('sanctum')->user()->break->isPast())
        return APIResponse::reject(2, 'Previous ban is not expired');
    auth('sanctum')->user()->update([
        'break' => now()->addHours($hours)
    ]);
    return APIResponse::success();
});

Route::post('breakDeposit', function(Request $request) {
    $hours = $request->hours;
    if($hours < 24 || $hours > 24 * 30) return APIResponse::reject(1, 'Invalid time');
    if(auth('sanctum')->user()->depositLimitBreak != null && !auth('sanctum')->user()->depositLimitBreak->isPast())
        return APIResponse::reject(2, 'Previous ban is not expired');
    auth('sanctum')->user()->update([
        'depositLimitBreak' => now()->addHours($hours),
        'depositLimit' => floatval($request->value),
        'depositLimitValue' => 0
    ]);
    return APIResponse::success();
});

Route::post('/phoenixCallback', function(Request $request) {
    return (new \App\Games\Kernel\ThirdParty\Phoenix\PhoenixGame())->processCallback($request);
});

Route::middleware('auth:sanctum')->post('cancelBonus', function(Request $request) {
    $balance = \App\BonusBalance::where('_id', $request->id)->first();
    if($balance == null || auth('sanctum')->user()->_id !== $balance->user) return APIResponse::reject(1, "Access denied");
    $balance->delete();
    return APIResponse::success();
});

Route::get('/test', function() {
    auth('sanctum')->user()->balance(Currency::find('local_brl'))->createBonus(1000, 'Test');
    return APIResponse::success();
});

Route::get('/test2', function() {
    auth('sanctum')->user()->balance(Currency::find('local_brl'))->addBonus(50, auth('sanctum')->user()->bonus());
    return APIResponse::success();
});