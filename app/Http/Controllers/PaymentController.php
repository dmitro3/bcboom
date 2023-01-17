<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use App\Models\Wallet;
use Ixudra\Curl\Facades\Curl;
use Auth;
use App\Actions\Process;
use App\Actions\Proc;


class PaymentController extends Controller
{


    // public function __construct(){
    //     $this->middleware('auth');
    // }
    public function paym()
    {
        $data['mchid'] = '000801682';
        $data['timestamp'] = time();
        $data['amount'] = '100';
        $data['orderno'] = intval(microtime(true) * 1000 * 1000);
        ;
        $data['notifyurl '] = 'http://localhost:8000';
        $data['currency'] = 'BRL';




        $url = 'https://api.hpay.one/open/index/createorder';
        $key = 'HECJKDEtTMbFKQDzVqY9';

        // $curl = new Curl();
// $curl->setOpt(CURLOPT_RETURNTRANSFER, TRUE);
// $curl->setOpt(CURLOPT_SSL_VERIFYPEER, FALSE);
// $curl->to($url)
// ->withData($data)->post();

        $response = Curl::to($url)

            ->withData($data)

            ->post();

        // $response = $curl;

        dd($response);
    }
    public function pay(Request $request)
    {

        $process = new Process;
        $user = Auth::user();
        $process->execute($request, $user);

    }

    public function testpay()
    {


        $process2 = new Proc;

        $process2->exec();

    }

    public function callback($result)
    {
        dd('hit');
        $wallet = Wallet::where('user_id', Auth::id())->first();
        if ($wallet) {
            $wallet->update([
                'order_no' => $result['data']['tx_orderno'],
                'deposit' => $wallet->deposit + $result['data']['amount'],
            ]);
        } else {
            Wallet::create([
                'user_id' => $user->id,
                'deposit' => $result['data']['amount']
            ]);
        }
        return $result['data']['pay_info'];
    }


}