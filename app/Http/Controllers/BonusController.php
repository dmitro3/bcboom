<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\Wallet;

class BonusController extends Controller
{
    //

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $bonusAmount = Wallet::where('user_id', '=', Auth::id())->first();
        var_dump($bonusAmount);
        if ($bonusAmount) {
            return response()->json([
                'deposit' => $bonusAmount->deposit,
                'bet' => $bonusAmount->bet,
                'bonus' => $bonusAmount->bonus
            ], 200);
        } else {
            $wallet = Wallet::create([
                'user_id' => Auth::id(),
                'deposit' => 0,
                'bet' => 0,
                'bonus' => 0
            ]);
            return response()->json([
                'deposit' => $wallet->deposit,
                'bet' => $wallet->bet,
                'bonus'=> $wallet->bonus,
                'message' => 'wallet created for user',
            ], 201);
        }
    }
}