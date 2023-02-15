<?php

namespace App\Http\Controllers;

use App\Models\Promotion;

class PromotionController extends Controller
{
    public function approve($id)
    {
        $promotion = Promotion::find($id);
        $wallet = $promotion->user->wallet;
        return redirect()->back()->with('success', 'Promotion approved successfully');
    }

    public function reject($id)
    {
        $promotion = Promotion::find($id);
        $promotion->update(['status' => 'rejected']);
        return response()->json([
            'success' => 'Promotion rejected successfully'
        ], 200);
    }

    public function delete($id)
    {
        $promotion = Promotion::findOrFail($id);
        $promotion->delete();
        return response()->json([
            'success' => 'Promotion deleted successfully'
        ], 200);

    }

    public function all_promotions()
    {
        $promotions = Promotion::orderBy('created_at', 'desc')->get();
        return response()->json([
            'promotions' => $promotions
        ]);
    }
}