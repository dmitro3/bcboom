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


class Callback
{


   public function run()

    {

        // $data = $_REQUEST;
        $data = Request::capture();
        $data = $data->request->all();
    
        // dd($request->all());

        //接受返回数据验证开始
//md5验证


        $user = Auth::user();

        $key = 'HECJKDEtTMbFKQDzVqY9'; //商户key

        $t = $data['sign'];
        unset($data['sign']);

        $sign = $this->getSignOpen($data, $key);
        



        if ($sign == $sign) {

            // 验签成功
            //PENDING 处理中 SUCCESS完成 FAILURE失败
            if (
                $data['trade_state'] == 'SUCCESS'
            ) {

                $payment = Payment::where('order_no', $data['tx_orderno'])->first();

                $wallet = Wallet::where('order_no', $data['tx_orderno'])->first();
                if($wallet){
                $wallet->update([
                    'total' => $wallet->total + $payment->amount,
                    'deposit' => $wallet->deposit + $payment->amount
                ]);
            }
            elseif($payment){
                $payment->update([
                    'called' => 1,
                    'status' => 'PAY'
                ]);
            }
                //改变订单状态，及其他业务修改
                

            } else if ($data['trade_state'] == 'PENDING') {
                echo "PENDING";
            } else if (['trade_state'] == 'FAILURE') {
                echo "FAILURE";
            }

            return "SUCCESS";

            //接收通知后必须输出”SUCCESS“代表接收成功。
        }

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
        $String = $this->formatQueryParaMapOpen($Parameters);
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
            if ($k != 's') {
                $buff .= $k . '=' . $v . '&';
            }
        }
        $reqPar = '';
        if (strlen($buff) > 0) {
            $reqPar = substr($buff, 0, strlen($buff) - 1);
        }
        return $reqPar;
    }

}