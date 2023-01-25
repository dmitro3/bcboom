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
        // unset($data['sign']);

        $user = Auth::user();

        $key = 'HECJKDEtTMbFKQDzVqY9'; //商户key

        // dd($data);

        $sign = $this->getSignOpen($data, $key);
        

        if ($sign == $data['sign']) {
            // 验签成功
            //PENDING 处理中 SUCCESS完成 FAILURE失败
            if (
                $data['trade_state'] == 'SUCCESS'
            ) {

                $pay = Payment::where('called', 0)
                    ->where('created_at', 'desc')
                    ->first();

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

                //改变订单状态，及其他业务修改

                echo "SUCCESS";

            } else if ($data['trade_state'] == 'PENDING') {
                echo "PENDING";
            } else if (['trade_state'] == 'FAILURE') {
                echo "FAILURE";
            }

            echo "SUCCESS";

            //接收通知后必须输出”SUCCESS“代表接收成功。
        }

    }


    /**
     *  生成签名
     */
    function getSignOpen($Obj, $key)
    {
        $Parameters = array();
        foreach ($Obj as $k => $v) {
            if (isset($v) && strlen($v) > 0) {
                $Parameters[$k] = $v;
            }
        }
        //签名步骤一：按字典序排序参数
        ksort($Parameters);
        $String = $this->formatQueryParaMapOpen($Parameters);
        $String = $String . '&key=' . $key;
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