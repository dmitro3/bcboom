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
        $user = Auth::user();
        $bonusAmount = Wallet::where('user_id', '=', $user->id)->first();
        // if ($bonusAmount) {
        return response()->json([
            'deposit' => $bonusAmount->deposit,
            'bet' => $bonusAmount->bet,
            'bonus' => $bonusAmount->bonus,
            'total' => $bonusAmount->total,
            'message' => 'success',
        ], 200);
        // }
        // return response()->json([
        //     'deposit' => $wallet->deposit,
        //     'bet' => $wallet->bet,
        //     'bonus'=> $wallet->bonus,
        //     'total' => $wallet->total,
        //     'message' => 'wallet created for user',
        // ], 201);
        // }
    }
}