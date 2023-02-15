<?php

namespace App\Http\Controllers;

use App\Models\Promotion;
use App\Models\Wallet;
use App\Notifications\Bonus;
use Auth;

class PromotionController extends Controller
{
    public function approve($id)
    {
        $user = Auth::user();
        $promotion = Promotion::find($id);
        if ($promotion === null) {
            return response()->json([
                'error' => 'promotion cannot be found'
            ], 404);
        }
        if ($promotion->status == 'approved') {
            return response()->json([
                'error' => 'Promotion already approved'
            ], 400);
        }
        $wallet = Wallet::where('user_id', $promotion->user)->first();
        $walletBonus = $wallet->bonus + $promotion->amount;
        $w = $wallet->update(
            ['withdrawable_balance' => $wallet->withdrawable_balance + $walletBonus]
        );
        $promotion->update(['status' => 'approved']);
        $user->notify(new Bonus($promotion));
        return response()->json([
            'success' => 'Promotion approved successfully',
            'wallet' => $w
        ], 200);
    }

    public function reject($id)
    {
        $promotion = Promotion::find($id);
        if ($promotion === null) {
            return response()->json([
                'error' => 'promotion cannot be found'
            ], 404);
        }

        $promotion->update(['status' => 'rejected']);
        return response()->json([
            'success' => 'Promotion rejected successfully'
        ], 200);
    }

    public function delete($id)
    {
        $promotion = Promotion::find($id);
        if ($promotion === null) {
            return response()->json([
                'error' => 'promotion cannot be found'
            ], 404);
        }
        $promotion->delete();
        return response()->json([
            'success' => 'Promotion deleted successfully'
        ], 200);

    }

    public function all_promotions()
    {
        // $promotions = Promotion::where('status', '!=', 'approved')->orderBy('created_at', 'desc')->get();
        $promotions = Promotion::orderBy('created_at', 'desc')->get();
        return response()->json([
            'promotions' => $promotions,
            'message' => 'success'
        ]);
    }
}