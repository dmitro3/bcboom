<?php

use App\Models\Payment;
use App\Models\Wallet;
use Auth;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\PaymentController;


class Callback{
    
    function execute() {
    $data = $_REQUEST;;

    unset($data['sign']);


    $key = 'HECJKDEtTMbFKQDzVqY9';


    $sign = getSignOpen($data,$key);


    if($sign == $data['sign']){

  if($data['trade_state'] == 'SUCCESS')
  {
    $wallet = Wallet::where('user_id', Auth::id())->first();
            if ($wallet) {
                $wallet->update([
                    'order_no' => $result['data']['tx_orderno'],
                    'deposit' => $wallet->deposit + $result['data']['amount'],
                ]);
            } else {
                Wallet::create([
                    'user_id' => Auth::Id(),
                    'deposit' => $result['data']['amount']
                ]);
            }
            $user = Auth::user();
            return response()->json([
                'user' => $user,
                'message' => 'Payment successful',
            ], 200);
}
 

  echo "SUCCESS";

}

/**
        *  生成签名
        */
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
        /**
         *  作用：格式化参数，签名过程需要使用
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
?>