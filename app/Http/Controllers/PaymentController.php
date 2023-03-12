<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Curl\Curl;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use App\Models\Wallet;
use Auth;
use App\Actions\Process;
use App\Actions\Callback;



class PaymentController extends Controller
{


    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }



    public function pay(Request $request)
    {
        $user = Auth::user();
        $process = new Process;
       $result =  $process->execute($request);
        $pay = Payment::where('customer', $user->username)->where('called', 0)->first();
        if($pay){

            return response()->json([
                'link' => $pay->link,
                'user' => $user,
                'message' => 'Payment saved',
            ], 200);
        }else{
            return response()->json([
                'message' => 'Couldnt pay.',
            ], 504);
        }

    }

    public function callback(Request $request)
    {

        if ($request == null) {
            $message = "failed to call callback";
            $status = false;
            return response()->json([
                'message' => $message,
                'status' => $status
            ]);
        } else {

            $callback = new Callback;
            return $callback->run($request);
        }
    }

    public function transactions()
    {
        $user = Auth::user();
        $payments = Payment::where('email', $user->email)->orderBy('created_at', 'desc')->get();
        $deposits = Wallet::where('user_id', $user->id)->first();
        if ($payments->count() > 0) {
            return response()->json([
                'payments' => $payments,
                'deposits' => $deposits->deposit,
                'message' => 'Payments retrieved',
            ], 200);
        } else {
            return response()->json([
                'message' => 'No payments found',
            ], 404);
        }
    }

}