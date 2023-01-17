<?php namespace App\Actions;

use App\Models\Payment;
use App\Models\Wallet;
use Auth;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class Proc {
    
    function exec(): User{
        $user = User::find(1);
    
    $data['mchid'] = '000801682';
    $data['timestamp'] = time();
    $data['amount'] = 1000;
    $data['orderno'] = intval(microtime(true) * 1000 * 1000);;
    $data['notifyurl '] = url('api/payment/pay');

$wallet = Wallet::where('user_id', $user->id)->first();

$url = 'https://api.hpay.one/open/index/createorder';
$key = 'HECJKDEtTMbFKQDzVqY9';

$sign = getSignOpen($data,$key);

$data['sign'] = $sign;
dd($data);

    $result = curl_file_get_contents($url,$data,'1');
    if(isset($result['data']['pay_info'])) {
        if($wallet){
        $wallet->update([
            'order_no' => $result['data']['tx_orderno'],
            'deposit' => $wallet->deposit + $result['data']['amount'],
        ]);
    }else{
        Wallet::create([
            'user_id' => $user->id,
            'deposit' => $result['data']['amount']
        ]);
    }
        return $result['data']['pay_info'];
    }

    function curl_file_get_contents($url, $data = null, $post = 0, $text = false)
    {
        
        $ch = curl_init();
        
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


    function getSignOpen($Obj,$key) 
    {
        foreach ($Obj as $k => $v) {
            if(isset($v) && strlen($v) > 0){
                $Parameters[$k] = $v;
            }
        }
    
        ksort($Parameters);
        $String = formatQueryParaMapOpen($Parameters);
        $String = $String.'&key='.$key;
        //dlog($String);
    
        $String = md5($String);
    
        $result = strtoupper($String);
        return $result;
    }
    /**
    
    */
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
        $reqPar;
        if (strlen($buff) > 0) {
            $reqPar = substr($buff, 0, strlen($buff)-1);
        }
        return $reqPar;
    }              

    }

}