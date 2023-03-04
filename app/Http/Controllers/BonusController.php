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
        $this->middleware('jwt.verify');
    }

    public function index()
    {
        $user = Auth::user();
        $wallet = Wallet::where('user_id', '=', $user->id)->first();
        function getNextLevelDetails($currentLevel)
        {
            $levelDetails = array(

                0 => array('nextLevel' => 1, 'minDeposit' => 100, 'minBet' => 800),
                1 => array('nextLevel' => 2, 'minDeposit' => 500, 'minBet' => 4000),
                2 => array('nextLevel' => 3, 'minDeposit' => 2000, 'minBet' => 16000),
                3 => array('nextLevel' => 4, 'minDeposit' => 10000, 'minBet' => 80000),
                4 => array('nextLevel' => 5, 'minDeposit' => 50000, 'minBet' => 400000),
                5 => array('nextLevel' => 6, 'minDeposit' => 200000, 'minBet' => 1200000),
                6 => array('nextLevel' => 7, 'minDeposit' => 1000000, 'minBet' => 6000000),
                7 => array('nextLevel' => 8, 'minDeposit' => 5000000, 'minBet' => 30000000),
                8 => array('nextLevel' => 9, 'minDeposit' => 20000000, 'minBet' => 120000000),
            );

            if ($currentLevel < 1 || $currentLevel > count($levelDetails)) {
                // Handle invalid level numbers
                return null;
            }

            $nextLevel = $levelDetails[$currentLevel]['nextLevel'];
            $minDeposit = $levelDetails[$currentLevel]['minDeposit'];
            $minBet = $levelDetails[$currentLevel]['minBet'];

            return array(
                'currentLevel' => $currentLevel,
                'nextLevel' => $nextLevel,
                'minimum_deposit_for_next_level' => $minDeposit,
                'minimum_bet_for_next_level' => $minBet,
            );
        }
        $levelDetails = getNextLevelDetails($user->vip);
        // dd($levelDetails);
        return response()->json([
            'deposit' => $wallet->deposit,
            'bet' => $wallet->bet,
            'bonus' => $wallet->bonus,
            'withdrawable_balance' => $wallet->withdrawable_balance,
            'level' => $levelDetails,
            'message' => 'success',
        ], 200);
        
    }
}