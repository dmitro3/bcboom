<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Wallet;
use Auth;
use App\Actions\Withdraw;


class WithdrawalController extends Controller
{
    //

    public function check(Request $request){
        $user = Auth::user();
        $wallet = Wallet::where('user_id', $user->id)->first();

        if($request->withdraw < $wallet->deposit){
            return response()->json([
                'message' => 'You dont have enough deposit to make a withdrawal',
                 'user' => $user->wallet->deposit
             ], 400);
        }else{
            $withdraw = new withdraw;
            $withdraw->execute();
        }


    }
}
