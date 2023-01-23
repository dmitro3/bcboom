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
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }
    public function handle(Request $request){
        
        $user = Auth::user();
        $wallet = Wallet::where('user_id', $user->id)->first();
        
                
        $time = Carbon::now()->subHour(24);
        
        $limited = Withdraw::where('user_id', $user->id)
        ->where('created_at', 'desc')
        ->where('created_at','<', $time)->first();
        
        if($user->vip == 0){
            
            if($request->amount > $wallet->total){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'message' => 'Total amount is less than requested amount'
                ]);
            }

            else{
            
            if(!$limited){
    
            $withdrawal = new Withdrawal;
            $withdrawal->handle($request, $diff = null);
            }else{
            
            $calc = 2.5/100 * $request->get('amount');
            $diff = $request->get('amount') - $calc;
            
            $withdrawal = new Withdrawal;
            
            $withdrawal->handle($request, $diff);
            
        }
            }
        }else if($user->vip == 1){

        }


    }
}
