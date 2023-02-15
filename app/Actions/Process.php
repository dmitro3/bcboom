<?php
namespace App\Actions;

use App\Models\Payment;
use App\Models\Promotion;
use App\Models\Wallet;
use Auth;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\PaymentController;





class Process
{
    private string $merchantNumber = "000801682";
    private string $merchantKey = "HECJKDEtTMbFKQDzVqY9";
    private string $gateway = "https://api.hpay.one";




    /**
     * Create a new controller instance.
     *
     * @return void
     */


    function execute(Request $request): string
    {
        $user = Auth::user();

        // $wallet =  Wallet::where('user_id', $user->id)->first();
        $data = [
            'mchid' => $this->merchantNumber,
            'timestamp' => time(),
            'amount' => $request->amount,
            'orderno' => intval(microtime(true) * 1000 * 1000),
            'notifyurl' => url('/api/notifypayment'),
            'email' => $user->email,
            'mobile' => $user->phone,
            'customer' => $user->username,
            'callbackurl' => url('/api/notifypayment'),
            'currency' => 'BRL'
        ];


        $sign = $this->sign($data, $this->merchantKey);
        $data['sign'] = $sign;

        function run_promotions($user, $amount)
        {
            $promotion_data = [
                'user' => $user->id,
                'username' => $user->username,
                'status' => 'pending',
            ];
            $deposit_counts = Payment::where('user_id', $user->id)->count();
            if ($user->first_100_deposit_bonus == 0 && $amount >= 500 && $amount <= 50000) {
                $user->update([
                    'first_100_deposit_bonus' => 1
                ]);
                return Promotion::create(array_merge($promotion_data, [
                    'percentage' => 100,
                    'amount' => $amount * 2,
                    'type' => '100% Deposit Bonus'
                ]));
            } else if ($user->second_100_deposit_bonus === 0 && $amount >= 500 && $amount <= 40000) {
                $user->update([
                    'second_100_deposit_bonus' => 1
                ]);
                Promotion::create(array_merge($promotion_data, [
                    'percentage' => 100,
                    'amount' => $amount * 2,
                    'type' => '100% Deposit Bonus'
                ]));
            } else if ($user->third_50_deposit_bonus === 0 && $amount >= 1000 && $amount <= 30000) {
                $user->update([
                    'third_50_deposit_bonus' => 1
                ]);
                Promotion::create(array_merge($promotion_data, [
                    'percentage' => 50,
                    'amount' => $amount * 1.5,
                    'type' => '50% Deposit Bonus'
                ]));
            } else if ($user->fourth_30_deposit_bonus === 0 && $amount >= 2000 && $amount <= 20000) {
                $user->update([
                    'fourth_30_deposit_bonus' => 1
                ]);
                Promotion::create(array_merge($promotion_data, [
                    'percentage' => 30,
                    'amount' => $amount * 1.3,
                    'type' => '30% Deposit Bonus'
                ]));
            } else if ($user->fifth_20_deposit_bonus === 0 && $amount >= 3000 && $amount <= 10000) {
                $user->update([
                    'fifth_20_deposit_bonus' => 1
                ]);
                Promotion::create(array_merge($promotion_data, [
                    'percentage' => 20,
                    'amount' => $amount * 1.2,
                    'type' => '20% Deposit Bonus'
                ]));
            }

        }
        $result = $this->curl($this->gateway . '/open/index/createorder', $data, true);

        // dd($result);


        if (isset($result['data']['pay_info'])) {
            // print('success');
            // dd($result['data']);

            $pay = Payment::create([
                "amount" => $result['data']['amount'],
                "pay_amount" => $result['data']['pay_amount'],
                "order_no" => $result['data']['tx_orderno'],
                "customer" => $user->username,
                'user_id' => $user->id,
                "mobile" => $user->phone,
                "pay_time" => $result['data']['create_time'],
                "final_amount" => $result['data']['amount'],
                "email" => $user->email,
                "link" => $result['data']['pay_info'],
                "status" => $result['data']["trade_state"],
                "sign" => $data['sign'],
            ]);

            run_promotions($user, $request->amount);


            $wallet = Wallet::where('user_id', $user->id)->first();
            $wallet->update([
                'order_no' => $pay->order_no
            ]);

            return $result['data']['pay_info'];

        } else {

            return $result['msg'];

        }
    }

    function status(Request $request): string
    {
        $data = $request->all();
        unset($data['sign']);
        $sign = $this->sign($data, $this->merchantKey);

        if ($sign === $request->sign) {
            if ($data['trade_state'] === 'SUCCESS') {
                $payment = Payment::where('order_no', $request->tx_orderno)->first();

                $wallet = Wallet::where('order_no', $request->tx_orderno)->first();

                $wallet->update([
                    'withdrawable_balance' => $wallet->withdrawable_balance + $payment->amount,
                    'deposit' => $wallet->deposit + $payment->amount
                ]);

                $payment->update([
                    'called' => 1,
                    'status' => 'PAY'
                ]);

            }
        }

        return "SUCCESS";
    }

    function validate(Request $request): bool
    {
        return $request->trade_state !== null;
    }

    function id(): string
    {
        return "hpay";
    }

    function name(): string
    {
        return "PIX";
    }

    function icon(): string
    {
        return "";
    }

    public function supports(): array
    {
        return [
            "local_brl"
        ];
    }

    private function curl($url, $data = null, $post = false, $text = false)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        if ($post) {
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        }

        $json = curl_exec($ch);
        curl_close($ch);

        if ($text)
            $result = $json;
        else
            $result = json_decode($json, true);

        return $result;
    }

    private function sign($object, $key)
    {
        $parameters = [];

        foreach ($object as $k => $v) {
            if (isset($v) && strlen($v) > 0) {
                $parameters[$k] = $v;
            }
        }

        ksort($parameters);
        $string = $this->formatQuery($parameters);
        $string = $string . '&key=' . $key;
        $string = md5($string);
        return strtoupper($string);
    }

    private function formatQuery($paraMap)
    {
        $buff = "";
        ksort($paraMap);
        foreach ($paraMap as $k => $v)
            if ($k != 's')
                $buff .= $k . '=' . $v . '&';

        $reqPar = "";
        if (strlen($buff) > 0)
            $reqPar = substr($buff, 0, strlen($buff) - 1);
        return $reqPar;
    }

}