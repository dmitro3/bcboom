<?php
namespace App\Actions;

use App\Models\Payment;
use App\Models\Promotion;
use App\Models\Wallet;
use Auth;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Withdraw;
use Illuminate\Http\Response;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\PaymentController;

class Withdrawal
{
    private string $merchantNumber = "000801682";
    private string $merchantKey = "HECJKDEtTMbFKQDzVqY9";
    private string $gateway = "https://api.hpay.one";




    /**
     * Create a new controller instance.
     *
     * @return void
     */


    function handle(Withdraw $withdrawal): string
    {

        // $wallet =  Wallet::where('user_id', $user->id)->first();
        $user = $withdrawal->user;

        

        $data = [
            'mchid' => $this->merchantNumber,
            'timestamp' => time(),
            'amount' => $withdrawal->final_amount,
            'orderno' => intval(microtime(true) * 1000 * 1000),
            'customermobile' => $withdrawal->whatsapp,
            'taxi' => $withdrawal->taxi,
            'pixkey' => $withdrawal->cpf,
            'pixtype' => $withdrawal->pixtype,
            'username' => $user->username,
            'notifyurl' => url('/api/notifywithdrawal'),
            'currency' => 'BRL'
        ];


        // dd($data);

        $sign = $this->sign($data, $this->merchantKey);
        $data['sign'] = $sign;

        $result = $this->curl($this->gateway . '/open/index/dfPay', $data, true);


        // dd($result);
        if (isset($result['data']['orderno'])) {
            // $withdrawal = Withdraw::where('user_id', Auth::id())
            // ->orderBy('created_at', 'desc')->first();
            $withdrawal->update([
                'orderno' => $result['data']['orderno'],
                'tx_orderno' => $result['data']['tx_orderno'],
                'create_time' => $result['data']['create_time'],
                'username' => $user->username,
                'bankname' => $result['data']['bankname'],
                'bankcard' => $result['data']['bankcard'],
                'trade_state' => $result['data']['trade_state'],
                'msg' => $result['msg']
            ]);
            
            Wallet::where('user_id', $user->id)->update([
                'order_no' => $result['data']['orderno']
            ]);
            return response()->json([
                'message' => $result['data']['msg'],
                'note' => "Order submitted"
            ]);
        } else {

            return $result['msg'];

        }
    }

    function status(Request $request): string
    {
        $data = $request->all();

        unset($data['sign']);
        $sign = $this->sign($data, $this->merchantKey);
        // dd($sign, $request->sign);
        if ($sign === $request->sign) {
            // if ($sign === $sign) {
            $wallet = Wallet::where('order_no', $request->orderno)->first();
            
            $withdrawal = Withdraw::where('orderno', $request->orderno)
                ->orderBy('created_at', 'desc')->first();

                if ($data['trade_state'] === 'SUCCESS') {
                // $minused = $wallet->deposit - $withdrawal->amount;
                    
                if($withdrawal && $wallet){
                    
                $withdrawal->update([
                    'approved' => 1,
                     'status' => 'PAYMENT COMPLETED'
                     ]);

                     $user = $wallet->user;
                     
                     // $deposit_counts = Payment::where('user_id', $user->id)->count();
                     
                     $user_promos = $this->promotions;
             
                     $getIds = $user_promos->pluck('id');
                     
                    
                    $promotion = Promotion::whereNotIn('id', $getIds)
                     ->where('type', 'withdrawal')
                     ->orderBy('created_at', 'desc')
                     ->first();

                     if($promotion){
                        
                     if($promotion->status == 'active'){
                        $percentage = $promotion->percentage / 100 * $withdrawal->final_amount;
                        $wallet->update([
                            'bonus' => $wallet->bonus + $percentage,
                            'withdrawable_balance' =>
                             $wallet->withdrawable_balance
                            - $withdrawal->final_amount
                        ]);   
                    }

                    }else{
                     

                     $wallet->update([
                        'withdrawable_balance'
                         => $wallet->withdrawable_balance
                          - $withdrawal->final_amount
                    ]);
                }
                    }
            } elseif ($data['trade_state'] === 'PENDING') {
                if($withdrawal){
                $withdrawal->update(['status' => 'PAYMENT IN PROGRESS', 'approved' => 0]);
                }
                echo 'PENDING';

            } else {
                
                $withdrawal->update(['status' => 'PAYMENT FAILED', 'approved' => 0]);

                echo 'FAILURE';
            }
            return "SUCCESS";
        }
        return "FAIL";

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