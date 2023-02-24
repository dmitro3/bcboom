<?php
namespace App\Actions;

use App\Models\Payment;
use App\Models\Promotion;
use App\Models\Wallet;
use Illuminate\Http\Request;
use PHPUnit\Util\Exception;


class Callback
{


    public function run(Request $request): string
    {

        // $data = $_REQUEST;
        // $data = Request::capture();
        // $data = $_REQUEST;

        // dd($request->all());

        //接受返回数据验证开始
//md5验证


        // try {

        $key = 'HECJKDEtTMbFKQDzVqY9'; //商户key
        $data = $request->all();
        unset($data['sign']);

        $sign = $this->getSignOpen($data, $key);

        if ($sign == $request->sign) {

            // 验签成功
            //PENDING 处理中 SUCCESS完成 FAILURE失败
            if (
                $data['trade_state'] == 'SUCCESS'
            ) {

                $payment = Payment::where('order_no', $data['tx_orderno'])->first();

                $wallet = Wallet::where('order_no', $data['tx_orderno'])->first();

                if ($wallet && $payment) {

                    $promotion = Promotion::where('type', 'deposit_bonus')->first();



                    if(isset($promotion->amount)) {
                        $percentage_amount = $promotion->percentage / $promotion->amount * $payment->amount;
                    $payment->update([
                        'pay_amount' => $payment->amount,
                        'percentage_amount' => $percentage_amount,
                        'final_amount' => $payment->amount + $percentage_amount,
                        'called' => 1,
                        'status' => 'PAYMENT COMPLETED',
                    ]);
                }else{
                    $percentage_amount = $promotion->percentage / 100 * $payment->amount;
                    $payment->update([
                        'pay_amount' => $payment->amount,
                        'percentage_amount' => $percentage_amount,
                        'final_amount' => $payment->amount + $percentage_amount,
                        'called' => 1,
                        'status' => 'PAYMENT COMPLETED',
                    ]);
                }
                    $wallet->update([
                        'withdrawable_balance' => $wallet->withdrawable_balance + $payment->final_amount,
                        'deposit' => $wallet->deposit + $payment->amount
                    ]);


                    $user = $wallet->user;
                    $user->run_promotions($request->amount);
                    $user->promoteLevel();
                }
                //改变订单状态，及其他业务修改


            } else if ($data['trade_state'] == 'PENDING') {
                if($payment){
                    $payment->update([
                        'status' => 'UNDER REVIEW'
                    ]);
                }
                echo "PENDING";
            } else if (['trade_state'] == 'FAILURE') {
                if($payment){
                    $payment->update([
                        'status' => 'PAYMENT FAILED'
                    ]);
                echo "FAILURE";
            }

            // return response("Hello, World!", 200);
            return "SUCCESS";


            //接收通知后必须输出”SUCCESS“代表接收成功。
        }

        return "FAIL";
        // } catch (Exception $e) {
        //     throw new Exception($data);
        //     // return "FAIL";
        // }

    }
    /**
     *  生成签名
     */
    function getSignOpen($Obj, $key)
    {
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