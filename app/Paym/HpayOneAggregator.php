<?php namespace App\Paym\Aggregate;

use App\Currency\Currency;
use App\Models\Wallet;
use App\Models\Payment;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class HpayOneAggregator extends Aggregate {

    private string $merchantNumber = "256018655";
    private string $merchantKey = "LHLMkrgmTcZuRHWgDhYV";
    private string $gateway = "https://api.hpay.one";

    function wallet(Wallet $wallet): string {
        $data = [
            'mchid' => $this->merchantNumber,
            'timestamp' => time(),
            'amount' => $request->amount,
            'orderno' => intval(microtime(true) * 1000 * 1000),
            'notifyurl' => url('/api/paymentStatus'),
            'currency' => 'BRL'
        ];

        $sign = $this->sign($data, $this->merchantKey);
        $data['sign'] = $sign;

        $result = $this->curl($this->gateway . '/open/index/createorder', $data, true);

        if(isset($result['data']['pay_info'])) {
            $pay = Payment::create([
                "amount" => $result['data']['amount'],
                "pay_amount" => $result['data']['pay_amount'],
                "order_no" => $result['data']['orderno'],
                "create_time" => $result['data']['create_time'],
                "customer" => $user->username,
                'user_id' => $user->id,
                "mobile" => $user->phone,
                "email" => $user->email,
                "link" => $result['data']['pay_info'],
                "status" => $result['data']["trade_state"],
                "sign" => $dsign,
            ]);


            $wallet->update([
                'order_no' => $pay->order_no
            ]);

            return $result['data']['pay_info'];
        } else Log::warning('Error: ' . json_encode($result));

        return url("/payment_error");
    }

    function status(Request $request): string {
        $data = $request->all();
        unset($data['sign']);
        $sign = $this->sign($data, $this->merchantKey);

        if($sign === $request->sign) {
            if($data['trade_state'] === 'SUCCESS') {
                $wallet = Wallet::where('order_no', $request->tx_orderno)->first();

                $wallet->update([
                    'total' => $wallet->total + $payment->amount,
                    'deposit' => $wallet->deposit + $payment->amount
                ]);
                
            }
        }

        return "SUCCESS";
    }

    function validate(Request $request): bool {
        return $request->trade_state !== null;
    }

    function id(): string {
        return "hpay";
    }

    function name(): string {
        return "PIX";
    }

    function icon(): string {
        return "";
    }

    public function supports(): array {
        return [
            "local_brl"
        ];
    }

    private function curl($url, $data = null, $post = false, $text = false) {
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

        if($text)
            $result = $json;
        else
            $result = json_decode($json, true);

        return $result;
    }

    private function sign($object, $key) {
        $parameters = [];

        foreach ($object as $k => $v) {
            if(isset($v) && strlen($v) > 0){
                $parameters[$k] = $v;
            }
        }

        ksort($parameters);
        $string = $this->formatQuery($parameters);
        $string = $string.'&key='.$key;
        $string = md5($string);
        return strtoupper($string);
    }

    private function formatQuery($paraMap) {
        $buff = "";
        ksort($paraMap);
        foreach ($paraMap as $k => $v)
            if ($k != 's')
                $buff .= $k .'='. $v.'&' ;

        $reqPar = "";
        if (strlen($buff) > 0)
            $reqPar = substr($buff, 0, strlen($buff) - 1);
        return $reqPar;
    }

}