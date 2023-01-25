<?php namespace App\Currency;

//This code is a test code -->

use App\AffiliateLog;
use App\Currency\BitGo\BitGoCurrency;
use App\Currency\Local\BRL;
use App\Currency\Option\WalletOption;
use App\Events\Deposit;
use App\Invoice;
use App\Settings;
use App\Transaction;
use App\User;
use App\VIP\VIP;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use MongoDB\BSON\Decimal128;

abstract class Currency {

    abstract function id(): string;

    abstract function walletId(): string;

    abstract function name(): string;

    abstract function alias(): string;

    abstract function displayName(): string;

    abstract function icon(): string;

    abstract function style(): string;

    abstract function newWalletAddress(): string;

    protected abstract function options(): array;

    public function minBet(): float {
        return 0.00000001;
    }

    public static function getByName($name): array {
        $result = [];
        foreach(self::getAllSupportedCoins() as $coin) if($coin->name() === $name) array_push($result, $coin);
        return $result;
    }

    public function tokenPrice() {
        try {
            if (!Cache::has('conversions:' . $this->alias()))
                Cache::put('conversions:' . $this->alias(), file_get_contents("https://api.coingecko.com/api/v3/coins/{$this->alias()}?localization=false&market_data=true"), now()->addMinutes(10));
            $json = json_decode(Cache::get('conversions:' . $this->alias()));
            return $json->market_data->current_price->usd;
        } catch (\Exception $e) {
            return -1;
        }
    }

    public function convertFiatToToken(float $usdAmount) {
        return $usdAmount / $this->tokenPrice();
    }

    public function convertTokenToFiat(float $tokenAmount) {
        return $tokenAmount * $this->tokenPrice();
    }

    public function getBotBet() {
        return $this->randomBotBet($this->convertFiatToToken(1), $this->convertFiatToToken(25));
    }

    /**
     * Gets random bet value. Higher values are less common.
     * @param $min
     * @param $max
     * @return mixed
     */
    protected function randomBotBet(float $min, float $max) {
        try {
            $diff = 100000000;
            return min(mt_rand($min * $diff, $max * $diff) / $diff, mt_rand($min * $diff, $max * $diff) / $diff);
        } catch (\Exception $e) {
            return $this->randomBotBet(1, 100);
        }
    }

    /** @return WalletOption[] */
    public function getOptions(): array {
        $options = array_merge($this->options(), [
            new class extends WalletOption {
                public function id() {
                    return "minWithdraw";
                }

                public function name(): string {
                    return "Min. withdrawal value";
                }
            },
            new class extends WalletOption {
                function id() {
                    return "demo";
                }

                function name(): string {
                    return "Free demo balance";
                }
            },
            new class extends WalletOption {
                function id() {
                    return 'high_roller_requirement';
                }

                function name(): string {
                    return '"High Rollers" tab min bet amount';
                }
            },
            new class extends WalletOption {
                public function id() {
                    return 'quiz';
                }

                public function name(): string {
                    return 'Trivia answer reward';
                }
            },
            new class extends WalletOption {
                public function id() {
                    return 'referral_bonus';
                }

                public function name(): string {
                    return 'Reward for registering with invite code';
                }
            }
        ]);

        if(!str_starts_with($this->id(), "local")) $options = array_merge([
            new class extends WalletOption {
                function id() {
                    return "confirmations";
                }

                function name(): string {
                    return "Required confirmations to accept deposit";
                }
            },
        ], $options);
        return $options;
    }

    public function option(string $key, string $value = null): string {
        if($value == null) {
            if(Cache::has('currency:'.$this->walletId().':'.$key)) $val = json_decode(Cache::get('currency:'.$this->walletId().':'.$key), true)[$key] ?? '1';
            else $val = \App\Currency::where('currency', $this->walletId())->first()->data[$key] ?? '1';

            if(str_starts_with($val, "R$")) {
                $val = floatval(substr($val, 2));
                return strval($this->convertFiatToToken((new BRL())->convertTokenToFiat($val)));
            } else if(str_starts_with($val, "$")) {
                $val = floatval(substr($val, 1));
                return strval($this->convertFiatToToken($val));
            }

            return $val;
        }

        $data = \App\Currency::where('currency', $this->walletId())->first();

        if(!$data) $data = \App\Currency::create(['currency' => $this->walletId(), 'data' => []]);

        $data = $data->data;
        $data[$key] = $value;

        \App\Currency::where('currency', $this->walletId())->first()->update([
            'data' => $data
        ]);

        Cache::forget('currency:'.$this->walletId().':'.$key);
        Cache::put('currency:'.$this->walletId().':'.$key, json_encode($data), now()->addYear());
        return $value;
    }

    abstract function isRunning(): bool;

    /**
     * @param string|null $wallet Null for every transaction except local nodes
     * @return mixed
     */
    abstract function process(string $wallet = null);

    abstract function send(string $from, string $to, float $sum);

    abstract function setupWallet();

    abstract function coldWalletBalance(): float;

    abstract function hotWalletBalance(): float;

    public static function toCurrencyArray(array $array) {
        $currency = [];
        $isGuest = auth('sanctum')->guest();

        foreach($array as $c) {
            $balance = $isGuest ? null : auth('sanctum')->user()->balance($c);

            $currency = array_merge($currency, [
                $c->id() => [
                    'id' => $c->id(),
                    'walletId' => $c->walletId(),
                    'name' => $c->name(),
                    'displayName' => $c->displayName(),
                    'icon' => $c->icon(),
                    'style' => $c->style(),
                    'price' => $c->tokenPrice(),
                    'requiredConfirmations' => intval($c->option('confirmations')),
                    'highRollerRequirement' => floatval($c->option('high_roller_requirement')),
                    'minWithdraw' => floatval($c->option('minWithdraw')),
                    'balance' => [
                        'real' => $isGuest ? null : $balance->get(),
                        'demo' => $isGuest ? null : $balance->demo(true)->get()
                ]
            ]
        ]);
            }

        return $currency;
    }

    public static function getAllSupportedCoins(): array {
        return [
            //new Local\Rub(),
            new Local\BRL(),

            new Native\Bitcoin(),
            new Native\Ethereum(),
            new Native\Litecoin(),
            new Native\Dogecoin(),
            new Native\Litecoin(),
            new Native\BitcoinCash(),

            /*
            new BitGo\Bitcoin(),
            new BitGo\BitcoinCash(),
            new BitGo\BitcoinGold(),
            new BitGo\WrappedBitcoin(),
            new BitGo\Algorand(),
            new BitGo\Celo(),
            new BitGo\Dash(),
            new BitGo\EOS(),
            new BitGo\Ethereum(),
            new BitGo\Litecoin(),
            new BitGo\Ripple(),
            new BitGo\Stellar(),
            new BitGo\Tezos(),
            new BitGo\Tron(),
            new BitGo\ZCash()
            */
        ];
    }

    public static function all(): array {
        $currencies = json_decode(Settings::get('currencies', '["native_btc"]', true));
        $result = [];
        foreach($currencies as $currency) array_push($result, Currency::find($currency));
        return $result;
    }

    public static function getByWalletId($walletId): array {
        $result = [];
        foreach(self::getAllSupportedCoins() as $coin) if($coin->walletId() === $walletId) array_push($result, $coin);
        return $result;
    }

    public static function find(string $id): ?Currency {
        foreach (self::getAllSupportedCoins() as $currency) if($currency->id() == $id) {
            if(\App\Currency::where('currency', $currency->id())->first() == null) {
                \App\Currency::create([
                    'currency' => $currency->id(),
                    'data' => []
                ]);
            }
            return $currency;
        }
        return null;
    }

    protected function accept(int $confirmations, string $wallet, string $id, float $sum) {
        $user = User::where('wallet_'.$this->id(), $wallet)->first();
        if($user == null) return false;

        $invoice = Invoice::where('id', $id)->first();
        if($invoice == null) {
            $invoice = Invoice::create([
                'user' => $user->_id,
                'sum' => new Decimal128($sum),
                'type' => 'currency',
                'currency' => $this->id(),
                'id' => $id,
                'confirmations' => $confirmations,
                'status' => 0,
                'usd_converted' => $this->convertTokenToFiat($sum)
            ]);
            event(new Deposit($user, $this, $sum));
        } else $invoice->update([
            'confirmations' => $confirmations
        ]);

        if($invoice->status == 0 && $invoice->confirmations >= intval($this->option('confirmations'))) {
            $invoice->update(['status' => 1]);
            $user->balance($this)->add($sum, Transaction::builder()->message('Deposit')->get());

            if(!($this instanceof BitGoCurrency)) $this->send($wallet, $this->option('transfer_address'), $sum);

            $user->depositPromotion($this, $sum);
        }

        return true;
    }

}