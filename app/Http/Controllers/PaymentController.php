<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use App\Models\Wallet;
use Ixudra\Curl\Facades\Curl;
use Auth;


class PaymentController extends Controller
{
    //

    public function pay(){
        $data['mchid'] = '000801682';
        $data['timestamp'] = time();
        $data['amount'] = '100';
        $data['orderno'] = intval(microtime(true) * 1000 * 1000);;
        $data['notifyurl '] = 'xxxxx';
        $data['currency'] = 'BRL';
    
    
    
    
        $url = 'https://api.hpay.one/open/index/createorder';
        $key = 'HECJKDEtTMbFKQDzVqY9';
    
// $curl = new Curl();
// $curl->setOpt(CURLOPT_RETURNTRANSFER, TRUE);
// $curl->setOpt(CURLOPT_SSL_VERIFYPEER, FALSE);
// $curl->to($url)
// ->withData($data)->post();

        $response = Curl::to($url)

                ->withData([$data, $key])

                ->post();

        // $response = $curl;

    dd($response);
    }
    public function payment(Request $request){
        $data['mchid'] = '000801682';
        $data['timestamp'] = time();
        $data['amount'] = $request->amount;
        $data['orderno'] = intval(microtime(true) * 1000 * 1000);;
        $data['notifyurl '] = '(/notify/url)';
        $data['currency'] = 'BRL';
    
        $url = 'https://api.hpay.one/open/index/createorder';
        $merchantKey = 'HECJKDEtTMbFKQDzVqY9';
    
        
        $sign = sign($data, $merchantKey);
        $data['sign'] = $sign;

        $result = curl($url, $data, true);
        
        $user = Auth::id();

        $wallet = Wallet::where('user_id', $user->id)->first();
        
        if(isset($result['data']['pay_info'])) {
            $wallet->update([
                'order_no' => $result['data']['tx_orderno'],
                'deposit' => $result['data']['amount']
            ]);

            return $result['data']['pay_info'];
        } else Log::warning('Error: ' . json_encode($result));

        return url("/payment_error");
    }

    // function status(Request $request): string {
    //     $data = $request->all();
    //     unset($data['sign']);
    //     $sign = sign($data, $merchantKey);

    //     if($sign === $request->sign) {
    //         if($data['trade_state'] === 'SUCCESS') {
                
    //             if($wallet != null) {
    //                 $wallet->update([
    //                     'deposit' => $wallet->deposit + $data['pay_amount'],
    //                 ]);
                    
    //             }
    //         }
    //     }

    //     return "SUCCESS";
    // }

    // function validate(Request $request) {
    //     return $request->trade_state !== null;
    // }

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
        $string = formatQuery($parameters);
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

    public function testPay() {
                function getSignOpen($Obj,$key) 
    {
        foreach ($Obj as $k => $v) {
            if(isset($v) && strlen($v) > 0){
                $Parameters[$k] = $v;
            }
        }
        //签名步骤一：按字典序排序参数
        ksort($Parameters);
        $String = formatQueryParaMapOpen($Parameters);
        $String = $String.'&key='.$key;
        //dlog($String);
        //签名步骤三：MD5加密
        $String = md5($String);
        //签名步骤四：所有字符转为大写
        $result = strtoupper($String);
        return $result;
    }
      function formatQueryParaMapOpen($paraMap, $urlencode = 'false') 
    {
        $buff = "";
        ksort($paraMap);
        foreach ($paraMap as $k => $v) {
            // if($urlencode) {
            //     $v = urlencode($v);
            // }
            if ($k != 's'){
                $buff .= $k .'='. $v.'&' ;
            }
        }
        // $reqPar;
        if (strlen($buff) > 0) {
            $reqPar = substr($buff, 0, strlen($buff)-1);
        }
        return $reqPar;
    }              
   function curl_file_get_contents($url, $data = null, $post = 0, $text = false)
    {
        //初始化curl
        $ch = curl_init();
        //参数设置
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        if ($post == '1')
        {
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        }
        $json = curl_exec($ch);
        curl_close($ch);
        //直接返回内容不用，字符串
        if($text == '1')
        {
            $result = $json;
        }
        else
        {
            $result = json_decode($json, true);
        }

        return $result;
    }
    
    $data['mchid'] = '000801682';//商户号;
    $data['timestamp'] = time();
    $data['amount'] = '100';
    // 商户订单号: 商家网站生成的订单号，由商户保证其唯一性，由字 母、数字、下划线组成，字符长度不超过32位.
    $data['orderno'] = intval(microtime(true) * 1000 * 1000);;
    $data['notifyurl '] = '/notify/url';




    $url = 'https://api.hpay.one/open/index/createorder';//网关地址
    $key = 'HECJKDEtTMbFKQDzVqY9';//商户key
    $sign = getSignOpen($data,$key);

    $data['sign'] = $sign;

    $result = curl_file_get_contents($url,$data,'1');

    
    dd($result);
    

 

     /**
    *  生成签名
    */

    /**
     *  作用：格式化参数，签名过程需要使用
     */
}
}