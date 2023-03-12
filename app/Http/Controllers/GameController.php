<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Http\Request;
use Auth;

class GameController extends Controller
{
    public function all_games()
    {
        $user = Auth::user();
        if ($user === null) {
            $games = Game::orderBy('created_at', 'desc')->limit(20)->get();
            $all_games = $this->getPlayerDetails($games);
            return response()->json([
                'games' => $all_games,
                'message' => 'success',
            ], 200);
        }
        $count = Game::all()->count();
        $takes = $user->admin === 1 ? $count : 20;
        $games = Game::orderBy('created_at', 'desc')->limit($takes)->get();

        $all_games = $this->getPlayerDetails($games);
        return response()->json([
            'games' => $all_games,
            'message' => 'success',
        ], 200);
    }

    function getPlayerDetails($games) {
        $all_games = [];
        foreach ($games as $game) {
            $player = User::where('id', $game->player)
                ->first();
            $p_game = [
                'id' => $game->id,
                'name' => $game->name,
                'status' => $game->status,
                'bet_amount' => $game->bet_amount,
                'earning' => $game->earning,
                'loss' => $game->loss,
                'player' => $player?->username,
                'created_at' => $game->created_at,
            ];
            array_push($all_games, $p_game);
        }
        return $all_games;
    }

    public function new_game(Request $request)
    {
        $user = Auth::user();
        if ($request->amount > $user->wallet->withdrawable_balance) {
            return response()->json([
                'message' => 'Insufficient balance to play',
            ], 400);
        }
        $new_balance = $user->wallet->withdrawable_balance - $request->amount;
        $user->wallet->update([
            'withdrawable_balance' => $new_balance,
            'bet' => $user->wallet->bet + $request->amount,
        ]);
        $game = Game::create([
            'name' => $request->name,
            'status' => $request->status,
            'bet_amount' => $request->amount,
            'earning' => $request->earning,
            'loss' => $request->loss,
            'player' => $user->id,
        ]);
        $user->makeVip;
        $wallet = Wallet::where('user_id', $user->id)->first();
        if ($request->status == 'won') {
            $wallet->update([
                'withdrawable_balance' => $wallet->withdrawable_balance + $request->earning,
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

    public function delete($id)
    {
        $game = Game::find($id);
        if ($game === null) {
            return response()->json([
                'error' => 'game not found'
            ]);
        }
        $game->delete();
        return response()->json([
            'success' => 'game deleted'
        ]);
    }
}