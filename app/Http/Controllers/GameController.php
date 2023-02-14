<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\Wallet;
use Illuminate\Http\Request;
use Auth;

class GameController extends Controller
{
    public function all_games()
    {
        $games = Game::all();
        return response()->json([
            'games' => $games,
            'message' => 'Games fetched',
        ], 200);
    }

    public function new_game(Request $request)
    {
        $user = Auth::user();
        $game = Game::create([
            'name' => $request->name,
            'status' => $request->status,
            'bet_amount' => $request->amount,
            'earning' => $request->earning,
            'loss' => $request->loss,
            'player' => $user->id,
        ]);
        $wallet = Wallet::where('user_id', $user->id)->first();
        if ($request->status == 'win') {
            $wallet->update([
                'withdrawable_balance' => $wallet->withdrawable_balance + $request->earning,
                'bet' => $wallet->bet + $request->loss,
            ]);
        } else {
            $wallet->update([
                'bet' => $wallet->bet - $request->loss,
                'withdrawable_balance' => $wallet->withdrawable_balance - $request->amount,
            ]);
        }
        return response()->json([
            'game' => $game,
            'wallet' => $wallet,
            'message' => 'success',
        ], 200);
    }

    public function my_games()
    {
        $user = Auth::user();
        $games = Game::where('player', $user->id)->get();
        return response()->json([
            'games' => $games,
            'message' => 'Games fetched',
        ], 200);
    }
}