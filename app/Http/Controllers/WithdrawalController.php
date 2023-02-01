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
        
                
        $time = Carbon::now()->subHours(24);
        $month = Carbon::now()->subMonths(1);
        
        $limited = Withdraw::where('user_id', $user->id)
        ->where('created_at','<', $time)
        ->orderBy('created_at', 'desc')
        ->get();

        $monthlyFree = Withdraw::where('user_id', $user->id)
        ->where('created_at', '<', $month)
        ->orderBy('created_at', 'desc')
        ->first();
        
        if($user->vip == 0){
            
            if($request->amount > $wallet->total){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Total amount is less than requested amount'
                ]);
            }

            else if($request->amount > 500){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'People on level 0 cannot spend more than 500 units of money.'
                ]);
            }

            else{

            if($limited->count() < 1){
                
                if($monthlyFree->sum('amount') < 100){
                    Withdraw::create([
                        'initial_amount' => $request->get('amount'),
                        'user_id' => Auth::id()
                    ]);
                    $withdrawal = new Withdrawal;
                
                    $withdrawal->handle($request, $diff = null);    
                }else{

                Withdraw::create([
                    'initial_amount' => $request->get('amount'),
                    'user_id' => Auth::id()
                ]);

                $calc = 2.5/100 * $request->get('amount');
                $diff = $request->get('amount') - $calc;
                

                $withdrawal = new Withdrawal;
                
                $withdrawal->handle($request, $diff = $diff);
            }

            }else{
            
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'You can only withdraw once a day.'
                ]);
    
            
        }
            }
        }
        
        //User Vip = 1

        if($user->vip == 1){
            
            if($request->amount > $wallet->total){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Total amount is less than requested amount'
                ]);
            }

            else if($request->amount > 2500){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'People on level 0 cannot spend more than 500 units of money.'
                ]);
            }

            else{

            if($limited->count() < 2){
                
                if($monthlyFree->sum('amount') < 100){
                    Withdraw::create([
                        'initial_amount' => $request->get('amount'),
                        'user_id' => Auth::id()
                    ]);
                    $withdrawal = new Withdrawal;
                
                    $withdrawal->handle($request, $diff = null);    
                }else{

                Withdraw::create([
                    'initial_amount' => $request->get('amount'),
                    'user_id' => Auth::id()
                ]);

                $calc = 2.5/100 * $request->get('amount');
                $diff = $request->get('amount') - $calc;
                

                $withdrawal = new Withdrawal;
                
                $withdrawal->handle($request, $diff = $diff);
            }
            
            }else{
            
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'You can only withdraw twice a day.'
                ]);
    
            
        }
            }
        }


        // User Vip = 2 or 3

        if($user->vip == 2 || $user->vip == 3){
            
            if($request->amount > $wallet->total){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Total amount is less than requested amount'
                ]);
            }

            else if($request->amount > 5000){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Maximum value of withdrawal surpassed.'
                ]);
            }

            else{

            if($limited->count() < 2){
                
                if($monthlyFree->sum('amount') < 100){
                    Withdraw::create([
                        'initial_amount' => $request->get('amount'),
                        'user_id' => Auth::id()
                    ]);
                    $withdrawal = new Withdrawal;
                
                    $withdrawal->handle($request, $diff = null);    
                }else{

                Withdraw::create([
                    'initial_amount' => $request->get('amount'),
                    'user_id' => Auth::id()
                ]);

                $calc = 2.5/100 * $request->get('amount');
                $diff = $request->get('amount') - $calc;
                

                $withdrawal = new Withdrawal;
                
                $withdrawal->handle($request, $diff = $diff);
            }
            
            }else{
            
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Maximum number of withdrawals per day reached.'
                ]);
    
            
        }
            }
        }


        // User Vip = 4 or 5

        if($user->vip == 4 || $user->vip == 5){
            
            if($request->amount > $wallet->total){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Total amount is less than requested amount'
                ]);
            }

            else if($request->amount > 5000){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Maximum value of withdrawal per day surpassed.'
                ]);
            }

            else{

            if($limited->count() < 3){
                
                if($monthlyFree->sum('amount') < 5000){
                    Withdraw::create([
                        'initial_amount' => $request->get('amount'),
                        'user_id' => Auth::id()
                    ]);
                    $withdrawal = new Withdrawal;
                
                    $withdrawal->handle($request, $diff = null);    
                }else{

                Withdraw::create([
                    'initial_amount' => $request->get('amount'),
                    'user_id' => Auth::id()
                ]);

                $calc = 2/100 * $request->get('amount');
                $diff = $request->get('amount') - $calc;
                

                $withdrawal = new Withdrawal;
                
                $withdrawal->handle($request, $diff = $diff);
            }
            
            }else{
            
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Maximum value of withdrawal per day reached.'
                ]);
    
            
        }
            }
        }



        // Vip level 6

        if($user->vip == 6){
            
            if($request->amount > $wallet->total){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Total amount is less than requested amount'
                ]);
            }

            else if($request->amount > 10000){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Maximum value of withdrawal per day reached.'
                ]);
            }

            else{

            if($limited->count() < 3){
                
                if($monthlyFree->sum('amount') < 100){
                    Withdraw::create([
                        'initial_amount' => $request->get('amount'),
                        'user_id' => Auth::id()
                    ]);
                    $withdrawal = new Withdrawal;
                
                    $withdrawal->handle($request, $diff = null);    
                }else{

                Withdraw::create([
                    'initial_amount' => $request->get('amount'),
                    'user_id' => Auth::id()
                ]);

                $calc = 2/100 * $request->get('amount');
                $diff = $request->get('amount') - $calc;
                

                $withdrawal = new Withdrawal;
                
                $withdrawal->handle($request, $diff = $diff);
            }
            
            }else{
            
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Maximum number of withdrawals per day reached.'
                ]);
    
            
        }
            }
        }

        //User vip = 7

        if($user->vip == 7){
            
            if($request->amount > $wallet->total){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Total amount is less than requested amount'
                ]);
            }

            else if($request->amount > 10000){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'People on level 7 cannot spend more than 5000 units of money.'
                ]);
            }

            else{

            if($limited->count() < 4){
                
                if($monthlyFree->sum('amount') < 10000){
                    Withdraw::create([
                        'initial_amount' => $request->get('amount'),
                        'user_id' => Auth::id()
                    ]);
                    $withdrawal = new Withdrawal;
                
                    $withdrawal->handle($request, $diff = null);    
                }else{

                Withdraw::create([
                    'initial_amount' => $request->get('amount'),
                    'user_id' => Auth::id()
                ]);

                $calc = 1.5/100 * $request->get('amount');
                $diff = $request->get('amount') - $calc;
                

                $withdrawal = new Withdrawal;
                
                $withdrawal->handle($request, $diff = $diff);
            }
            
            }else{
            
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Maximum number of withdrawals per day reached.'
                ]);
    
            
        }
            }
        }

        //User vip = 8

        if($user->vip == 8){
            
            if($request->amount > $wallet->total){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Total amount is less than requested amount'
                ]);
            }

            else if($request->amount > 10000){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Maximum value of withdrawals reached.'
                ]);
            }

            else{

            if($limited->count() < 4){
                
                if($monthlyFree->sum('amount') < 10000){
                    Withdraw::create([
                        'initial_amount' => $request->get('amount'),
                        'user_id' => Auth::id()
                    ]);
                    $withdrawal = new Withdrawal;
                
                    $withdrawal->handle($request, $diff = null);    
                }else{

                Withdraw::create([
                    'initial_amount' => $request->get('amount'),
                    'user_id' => Auth::id()
                ]);

                $calc = 1.5/100 * $request->get('amount');
                $diff = $request->get('amount') - $calc;
                

                $withdrawal = new Withdrawal;
                
                $withdrawal->handle($request, $diff = $diff);
            }
            
            }else{
            
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Maximum number of withdrawals per day reached.'
                ]);
    
            
        }
            }
        }

        //User vip = 9

        if($user->vip == 9){
            
            if($request->amount > $wallet->total){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Total amount is less than requested amount'
                ]);
            }

            else if($request->amount > 20000){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'You reach your withdrawal limit for your level.'
                ]);
            }

            else{

            if($limited->count() < 20000){
                
                if($monthlyFree->sum('amount') < 20000){
                    Withdraw::create([
                        'initial_amount' => $request->get('amount'),
                        'user_id' => Auth::id()
                    ]);
                    $withdrawal = new Withdrawal;
                
                    $withdrawal->handle($request, $diff = null);    
                }else{

                Withdraw::create([
                    'initial_amount' => $request->get('amount'),
                    'user_id' => Auth::id()
                ]);

                $calc = 1/100 * $request->get('amount');
                $diff = $request->get('amount') - $calc;
                

                $withdrawal = new Withdrawal;
                
                $withdrawal->handle($request, $diff = $diff);
            }
            
            }else{
            
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Maximum number of withdrawals for level reached.'
                ]);
    
            
        }
            }
        }

        //User vip = 10

        if($user->vip == 10){
            
            if($request->amount > $wallet->total){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Total amount is less than requested amount'
                ]);
            }

            else if($request->amount > 20000){
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'maximum value of withdrawal reached.'
                ]);
            }

            else{

            if($limited->count() < 5){
                
                if($monthlyFree->sum('amount') < 50000){
                    Withdraw::create([
                        'initial_amount' => $request->get('amount'),
                        'user_id' => Auth::id()
                    ]);
                    $withdrawal = new Withdrawal;
                
                    $withdrawal->handle($request, $diff = null);    
                }else{

                Withdraw::create([
                    'initial_amount' => $request->get('amount'),
                    'user_id' => Auth::id()
                ]);

                $calc = 1/100 * $request->get('amount');
                $diff = $request->get('amount') - $calc;
                

                $withdrawal = new Withdrawal;
                
                $withdrawal->handle($request, $diff = $diff);
            }
            
            }else{
            
                return response()->json([
                    'amount' => $request->amount,
                    'deposit' => $wallet->deposit,
                    'current_total' => $wallet->total,
                    'message' => 'Maximum number of withdrawals for level reached.'
                ]);
    
            
        }
            }
        }


    }
}
