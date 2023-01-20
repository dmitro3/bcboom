<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Wallet;
use App\Models\Withdraw;
use Auth;
use App\Actions\Withdrawal;
use App\Models\Deposit;
use Carbon\Carbon;



class WithdrawalController extends Controller
{
    //

    public function handle(Request $request){
        $user = Auth::user();
       
     

        $wallet = Wallet::where('user_id', $user->id)->first();
        $withdraw = Withdraw::where('user_id', $user->id)->first();

        $not_limited = Withdraw::where('user_id', $user->id)
        ->where('created_at', 'desc')
        ->where('created_at','>', Carbon::now()->subDay(1))->first();
        if($user->vip == 0){

        if($not_limited){
        if($request->withdraw < $wallet->deposit){
            return response()->json([
                'message' => 'You dont have enough deposit to make a withdrawal',
                 'user' => $user->wallet->deposit
             ], 400);
        }else{
            $withdraw = new Withdrawal;
            $withdraw->execute($request);
            }
        }else{
            $calc = 2.5/100 * $request->get('amount');
            $diff = $request->get('amount') - $calc;
            $withdraw = new Withdrawal;
            $withdraw->execute($diff);
        }

    }else if($user->vip == 1){

        }


    }
}
