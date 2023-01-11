<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\Wallet;

class BonusController extends Controller
{
    //

    public function __construct(){
        $this->middleware('auth');
    }

    public function index(){
        $bonusAmount = Wallet::where('user_id', '=', Auth::id())->first();
        if($bonusAmount){
            return response()->json([
                'wallet' => $bonusAmount,
                'bonus' => $bonusAmount->bonus
            ], 201);
        }else{
            return response()->json([
                'bonus' => 0,
                'amount' => 0,
                'message' => 'User has no bonus/amount',
            ], 201);
        } 
    }
}
