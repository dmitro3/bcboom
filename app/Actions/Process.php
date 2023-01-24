<?php
namespace App\Actions;

use App\Models\Payment;
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



        // $wallet =  Wallet::where('user_id', $user->id)->first();
        $user = Auth::user();
        $data = [
            'mchid' => $this->merchantNumber,
            'timestamp' => time(),
            'amount' => $request->amount,
            'orderno' => intval(microtime(true) * 1000 * 1000),
            'notifyurl' => url('https://bcboom.restoraweb.com/api/notifypayment'),
            'email' => $user->email,
            'mobile' => $user->phone,
            'customer' => $user->username,
            'callbackurl' => url('https://bcboom.restoraweb.com/api/notifypayment'),
            'currency' => 'BRL'
        ];


        $sign = $this->sign($data, $this->merchantKey);
        $data['sign'] = $sign;

        $result = $this->curl($this->gateway . '/open/index/createorder', $data, true);
        var_dump($result);


        if (isset($result['data']['pay_info'])) {
            // print('success');
            // dd($result['data']);

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
            ]);


            return $pay;
        } else {

            return $result['msg'];

        }
    }

    function status(Request $request): string
    {
        $data = $request->all();
        $user = Auth::user();
        unset($data['sign']);
        $sign = $this->sign($data, $this->merchantKey);
        $pay = Payment::where('called', 0)
        ->where('created_at', 'desc')
        ->first();

        if ($sign === $request->sign) {
            if ($data['trade_state'] === 'SUCCESS') {
                $wallet = Wallet::where('user_id', $pay->user_id)->first();
                
                    $wallet->update([
                        'order_no' => $pay->tx_orderno,
                        'deposit' => $wallet->deposit + $pay->amount,
                        'total' => $wallet->total + $pay->amount
                    ]);

                $pay->update([
                    'called' => 1,
                    'status' => 'PAY'
                ]);
                
                return "SUCCESS";
                

            }

            return "SUCCESS";
        }

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