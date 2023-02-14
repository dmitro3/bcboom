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

    public function __construct()
    {
        $this->middleware('jwt.verify');

    }

    public function transactions()
    {
        $user = Auth::user();
        $withdrawals = Withdraw::where('user_id', $user->id)->orderBy('created_at', 'desc')->get();

        if ($withdrawals) {
            return response()->json([
                'withdrawals' => $withdrawals,
                'message' => 'Withdrawals retrieved',
            ], 200);
        } else {
            return response()->json([
                'message' => 'No withdrawal found',
            ], 404);
        }
    }


    public function handle(Request $request)
    {
        $user = Auth::user();
        $default_oderno = intval(microtime(true) * 1000 * 1000);
        $default_withdraw_values = [
            'orderno' => $default_oderno,
            'initial_amount' => $request->get('amount'),
            'user_id' => Auth::id(),
            'final_amount' => $request->get('amount'),
            'taxi' => $request->get('taxi'),
            'pixkey' => $request->get('pixkey'),
            'pixtype' => 'CPF',
            'cpf' => $request->cpf,
            "whatsapp" => $request->whatsapp,
            'username' => $user->username,
            'status' => 'UNDER REVIEW',
        ];

        $wallet = Wallet::where('user_id', $user->id)->first();


        $time = Carbon::now()->subDay()->toDateTimeString();
        $month = Carbon::now()->subMonths(1);

        $limited = Withdraw::where('user_id', $user->id)
            ->where('created_at', '>=', $time)->get();

        $monthlyFree = Withdraw::where('user_id', $user->id)
            ->where('created_at', '<', $month)
            ->orderBy('created_at', 'desc')
            ->get();
        if ($wallet->withdrawable_balance > 0) {
            if ($user->vip == 0) {
                if ($request->amount > $wallet->withdrawable_balance) {
                    return response()->json([
                        'amount' => $request->amount,
                        'deposit' => $wallet->deposit,
                        'withdrawable_balance' => $wallet->withdrawable_balance,
                        'message' => 'withdrawable_balance amount is less than requested amount'
                    ], 422);
                } else if ($request->amount > 500) {
                    return response()->json([
                        'amount' => $request->amount,
                        'deposit' => $wallet->deposit,
                        'withdrawable_balance' => $wallet->withdrawable_balance,
                        'message' => 'User on level 0 cannot spend more than 500 units of money.'
                    ], 422);
                } else {

                    if ($limited->count() < 1) {
                        if ($monthlyFree->sum('amount') < 100) {
                            Withdraw::create($default_withdraw_values);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);
                            return response()->json([
                                'message' => 'success',
                                'status' => 200
                            ], 200);
                        } else {


                            $calc = 2.5 / 100 * $request->get('amount');
                            $diff = $request->get('amount') - $calc;

                            unset($default_withdraw_values['final_amount']);

                            Withdraw::create([...$default_withdraw_values, 'withdrawal_fee' => $calc, 'final_amount' => $diff]);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);
                            return response()->json([
                                'message' => 'success',
                                'status' => 200
                            ], 200);
                        }



                    } else {

                        return response()->json([
                            'amount' => $request->amount,
                            'deposit' => $wallet->deposit,
                            'withdrawable_balance' => $wallet->withdrawable_balance,
                            'message' => 'You can only withdraw once a day.'
                        ], 422);


                    }
                }
            }

            //User Vip = 1

            if ($user->vip == 1) {

                if ($request->amount > $wallet->withdrawable_balance) {
                    return response()->json([
                        'amount' => $request->amount,
                        'deposit' => $wallet->deposit,
                        'withdrawable_balance' => $wallet->withdrawable_balance,
                        'message' => 'withdrawable_balance amount is less than requested amount'
                    ], 422);
                } else if ($request->amount > 2500) {
                    return response()->json([
                        'amount' => $request->amount,
                        'deposit' => $wallet->deposit,
                        'withdrawable_balance' => $wallet->withdrawable_balance,
                        'message' => 'User on level 0 cannot spend more than 500 units of money.'
                    ], 422);
                } else {

                    if ($limited->count() < 2) {

                        if ($monthlyFree->sum('amount') < 100) {
                            Withdraw::create($default_withdraw_values);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);
                            return response()->json([
                                'message' => 'success',
                                'status' => 200
                            ], 200);

                        } else {

                            $calc = 2.5 / 100 * $request->get('amount');
                            $diff = $request->get('amount') - $calc;


                            unset($default_withdraw_values['final_amount']);

                            Withdraw::create([...$default_withdraw_values, 'withdrawal_fee' => $calc, 'final_amount' => $diff]);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);

                            return response()->json([
                                'message' => 'success',
                                'status' => 200
                            ], 200);
                        }

                    } else {

                        return response()->json([
                            'amount' => $request->amount,
                            'deposit' => $wallet->deposit,
                            'withdrawable_balance' => $wallet->withdrawable_balance,
                            'message' => 'You can only withdraw twice a day.'
                        ], 422);


                    }
                }
            }


            // User Vip = 2 or 3

            if ($user->vip == 2 || $user->vip == 3) {
                // dd($default_oderno);
                if ($request->amount > $wallet->withdrawable_balance) {
                    return response()->json([
                        'amount' => $request->amount,
                        'deposit' => $wallet->deposit,
                        'withdrawable_balance' => $wallet->withdrawable_balance,
                        'message' => 'withdrawable_balance amount is less than requested amount'
                    ], 422);
                } else if ($request->amount > 5000) {
                    return response()->json([
                        'amount' => $request->amount,
                        'deposit' => $wallet->deposit,
                        'withdrawable_balance' => $wallet->withdrawable_balance,
                        'message' => 'Maximum value of withdrawal surpassed.'
                    ], 422);
                } else {
                    if ($limited->count() < 2) {

                        if ($monthlyFree->sum('amount') < 100) {
                            Withdraw::create($default_withdraw_values);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);
                            return response()->json([
                                'message' => 'success',
                                'status' => 200
                            ], 200);
                        } else {
                            $calc = 2.5 / 100 * $request->get('amount');
                            $diff = $request->get('amount') - $calc;


                            unset($default_withdraw_values['final_amount']);

                            Withdraw::create([...$default_withdraw_values, 'withdrawal_fee' => $calc, 'final_amount' => $diff]);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);

                            return response()->json([
                                'message' => 'success',
                                'status' => 200
                            ], 200);

                        }

                    } else {

                        return response()->json([
                            'amount' => $request->amount,
                            'deposit' => $wallet->deposit,
                            'withdrawable_balance' => $wallet->withdrawable_balance,
                            'message' => 'Maximum number of withdrawals per day reached.'
                        ], 422);


                    }
                }
            }


            // User Vip = 4 or 5

            if ($user->vip == 4 || $user->vip == 5) {

                if ($request->amount > $wallet->withdrawable_balance) {
                    return response()->json([
                        'amount' => $request->amount,
                        'deposit' => $wallet->deposit,
                        'withdrawable_balance' => $wallet->withdrawable_balance,
                        'message' => 'withdrawable_balance amount is less than requested amount'
                    ], 422);
                } else if ($request->amount > 5000) {
                    return response()->json([
                        'amount' => $request->amount,
                        'deposit' => $wallet->deposit,
                        'withdrawable_balance' => $wallet->withdrawable_balance,
                        'message' => 'Maximum value of withdrawal per day surpassed.'
                    ], 422);
                } else {

                    if ($limited->count() < 3) {

                        if ($monthlyFree->sum('amount') < 5000) {
                            Withdraw::create($default_withdraw_values);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);
                            return response()->json([
                                'message' => 'success',
                                'status' => 200
                            ], 200);

                        } else {

                            $calc = 2 / 100 * $request->get('amount');
                            $diff = $request->get('amount') - $calc;


                            unset($default_withdraw_values['final_amount']);

                            Withdraw::create([...$default_withdraw_values, 'withdrawal_fee' => $calc, 'final_amount' => $diff]);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);

                            return response()->json([
                                'message' => 'success',
                                'status' => 200
                            ], 200);

                        }

                    } else {

                        return response()->json([
                            'amount' => $request->amount,
                            'deposit' => $wallet->deposit,
                            'withdrawable_balance' => $wallet->withdrawable_balance,
                            'message' => 'Maximum value of withdrawal per day reached.'
                        ], 422);


                    }
                }
            }



            // Vip level 6

            if ($user->vip == 6) {

                if ($request->amount > $wallet->withdrawable_balance) {
                    return response()->json([
                        'amount' => $request->amount,
                        'deposit' => $wallet->deposit,
                        'withdrawable_balance' => $wallet->withdrawable_balance,
                        'message' => 'withdrawable_balance amount is less than requested amount'
                    ], 422);
                } else if ($request->amount > 10000) {
                    return response()->json([
                        'amount' => $request->amount,
                        'deposit' => $wallet->deposit,
                        'withdrawable_balance' => $wallet->withdrawable_balance,
                        'message' => 'Maximum value of withdrawal per day reached.'
                    ], 422);
                } else {

                    if ($limited->count() < 3) {

                        if ($monthlyFree->sum('amount') < 100) {
                            Withdraw::create($default_withdraw_values);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);
                            return response()->json([
                                'message' => 'success',
                                'status' => 200
                            ], 200);

                        } else {

                            $calc = 2 / 100 * $request->get('amount');
                            $diff = $request->get('amount') - $calc;


                            unset($default_withdraw_values['final_amount']);

                            Withdraw::create([...$default_withdraw_values, 'withdrawal_fee' => $calc, 'final_amount' => $diff]);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);
                            return response()->json([
                                'message' => 'success',
                                'status' => 200
                            ], 200);

                        }

                    } else {

                        return response()->json([
                            'amount' => $request->amount,
                            'deposit' => $wallet->deposit,
                            'withdrawable_balance' => $wallet->withdrawable_balance,
                            'message' => 'Maximum number of withdrawals per day reached.'
                        ], 422);


                    }
                }
            }

            //User vip = 7

            if ($user->vip == 7) {

                if ($request->amount > $wallet->withdrawable_balance) {
                    return response()->json([
                        'amount' => $request->amount,
                        'deposit' => $wallet->deposit,
                        'withdrawable_balance' => $wallet->withdrawable_balance,
                        'message' => 'withdrawable_balance amount is less than requested amount'
                    ], 422);
                } else if ($request->amount > 10000) {
                    return response()->json([
                        'amount' => $request->amount,
                        'deposit' => $wallet->deposit,
                        'withdrawable_balance' => $wallet->withdrawable_balance,
                        'message' => 'User on level 7 cannot spend more than 5000 units of money.'
                    ], 422);
                } else {

                    if ($limited->count() < 4) {

                        if ($monthlyFree->sum('amount') < 10000) {
                            Withdraw::create($default_withdraw_values);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);
                            return response()->json([
                                'message' => 'success',
                                'status' => 200
                            ], 200);

                        } else {

                            $calc = 1.5 / 100 * $request->get('amount');
                            $diff = $request->get('amount') - $calc;


                            unset($default_withdraw_values['final_amount']);

                            Withdraw::create([...$default_withdraw_values, 'withdrawal_fee' => $calc, 'final_amount' => $diff]);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);
                            return response()->json([
                                'message' => 'success',
                                'status' => 200
                            ], 200);

                        }

                    } else {

                        return response()->json([
                            'amount' => $request->amount,
                            'deposit' => $wallet->deposit,
                            'withdrawable_balance' => $wallet->withdrawable_balance,
                            'message' => 'Maximum number of withdrawals per day reached.'
                        ], 422);


                    }
                }
            }

            //User vip = 8

            if ($user->vip == 8) {

                if ($request->amount > $wallet->withdrawable_balance) {
                    return response()->json([
                        'amount' => $request->amount,
                        'deposit' => $wallet->deposit,
                        'withdrawable_balance' => $wallet->withdrawable_balance,
                        'message' => 'withdrawable_balance amount is less than requested amount'
                    ]);
                } else if ($request->amount > 10000) {
                    return response()->json([
                        'amount' => $request->amount,
                        'deposit' => $wallet->deposit,
                        'withdrawable_balance' => $wallet->withdrawable_balance,
                        'message' => 'Maximum value of withdrawals reached.'
                    ]);
                } else {

                    if ($limited->count() < 4) {

                        if ($monthlyFree->sum('amount') < 10000) {
                            Withdraw::create($default_withdraw_values);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);
                            return response()->json([
                                'message' => 'success',
                                'status' => 200
                            ], 200);

                        } else {

                            $calc = 1.5 / 100 * $request->get('amount');
                            $diff = $request->get('amount') - $calc;


                            unset($default_withdraw_values['final_amount']);

                            Withdraw::create([...$default_withdraw_values, 'withdrawal_fee' => $calc, 'final_amount' => $diff]);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);
                            return response()->json([
                                'message' => 'success',
                                'status' => 200
                            ], 200);

                        }

                    } else {

                        return response()->json([
                            'amount' => $request->amount,
                            'deposit' => $wallet->deposit,
                            'withdrawable_balance' => $wallet->withdrawable_balance,
                            'message' => 'Maximum number of withdrawals per day reached.'
                        ], 422);


                    }
                }
            }

            //User vip = 9

            if ($user->vip == 9) {

                if ($request->amount > $wallet->withdrawable_balance) {
                    return response()->json([
                        'amount' => $request->amount,
                        'deposit' => $wallet->deposit,
                        'withdrawable_balance' => $wallet->withdrawable_balance,
                        'message' => 'withdrawable_balance amount is less than requested amount'
                    ], 422);
                } else if ($request->amount > 20000) {
                    return response()->json([
                        'amount' => $request->amount,
                        'deposit' => $wallet->deposit,
                        'withdrawable_balance' => $wallet->withdrawable_balance,
                        'message' => 'You reach your withdrawal limit for your level.'
                    ], 422);
                } else {

                    if ($limited->count() < 20000) {

                        if ($monthlyFree->sum('amount') < 20000) {
                            Withdraw::create($default_withdraw_values);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);
                            return response()->json([
                                'message' => 'success',
                                'status' => 200
                            ], 200);

                        } else {

                            $calc = 1 / 100 * $request->get('amount');
                            $diff = $request->get('amount') - $calc;



                            unset($default_withdraw_values['final_amount']);

                            Withdraw::create([...$default_withdraw_values, 'withdrawal_fee' => $calc, 'final_amount' => $diff]);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);
                            return response()->json([
                                'message' => 'success',
                                'status' => 200
                            ], 200);

                        }

                    } else {

                        return response()->json([
                            'amount' => $request->amount,
                            'deposit' => $wallet->deposit,
                            'withdrawable_balance' => $wallet->withdrawable_balance,
                            'message' => 'Maximum number of withdrawals for level reached.'
                        ], 422);


                    }
                }
            }

            //User vip = 10

            if ($user->vip == 10) {

                if ($request->amount > $wallet->withdrawable_balance) {
                    return response()->json([
                        'amount' => $request->amount,
                        'deposit' => $wallet->deposit,
                        'withdrawable_balance' => $wallet->withdrawable_balance,
                        'message' => 'withdrawable_balance amount is less than requested amount'
                    ], 422);
                } else if ($request->amount > 20000) {
                    return response()->json([
                        'amount' => $request->amount,
                        'deposit' => $wallet->deposit,
                        'withdrawable_balance' => $wallet->withdrawable_balance,
                        'message' => 'maximum value of withdrawal reached.'
                    ], 422);
                } else {

                    if ($limited->count() < 5) {

                        if ($monthlyFree->sum('amount') < 50000) {
                            Withdraw::create($default_withdraw_values);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);
                            return response()->json([
                                'message' => 'success',
                                'status' => 200
                            ], 200);

                        } else {

                            $calc = 1 / 100 * $request->get('amount');
                            $diff = $request->get('amount') - $calc;


                            unset($default_withdraw_values['final_amount']);

                            Withdraw::create([...$default_withdraw_values, 'withdrawal_fee' => $calc, 'final_amount' => $diff]);
                            $wallet->update([
                                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount
                            ]);

                            return response()->json([
                                'message' => 'success',
                                'status' => 200
                            ], 200);

                        }

                    } else {

                        return response()->json([
                            'amount' => $request->amount,
                            'deposit' => $wallet->deposit,
                            'withdrawable_balance' => $wallet->withdrawable_balance,
                            'message' => 'Maximum number of withdrawals for level reached.'
                        ], 422);


                    }
                }
            }
        } else {
            return response()->json([
                'message' => 'No money in your wallet'
            ], 401);
        }


    }
}