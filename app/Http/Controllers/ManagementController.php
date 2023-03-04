<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Withdraw;
use App\Models\Payment;
use App\Models\Wallet;
use App\Actions\Withdrawal;
use App\Actions\Process;

class ManagementController extends Controller
{
    //

    public function withdrawalRequests()
    {
        $requests = Withdraw::where('approved', 0)
            ->orderBy('created_at', 'desc')->get();
        return response()->json([
            "withdrawRequests" => $requests
        ], 200);
    }

    public function approveWithdrawal($id)
    {
        $withdrawal = Withdraw::where('user_id', $id)->first();

        $runWithdrawal = new Withdrawal;
        if ($withdrawal !== Null) {
            $runWithdrawal->handle($withdrawal);

            $withdrawal->update([
                'approved' => 1
            ]);

            return response()->json([
                "message" => "Accepted"
            ]);
        } else {
            return response()->json([
                'message' => "This withdrawal cannot be approved."
            ]);
        }
    }

    public function rejectWithdrawal($id)
    {
        $withdrawal = Withdraw::where('id', $id)->first();

        $withdrawal->update([
            'status' => 'PAYMENT DECLINED',
            'rejected' => true
        ]);

        return response()->json([
            'message' => 'Payout DECLINED',
            'withdrawal' => $withdrawal
        ], 200);
    }

    public function ignoreWithdrawal($id)
    {
        $withdrawal = Withdraw::where('id', $id)->first();

        $withdrawal->update([
            'status' => 'PAYMENT IGNORED',
            'rejected' => true
        ]);

        return response()->json([
            'message' => 'Ignored the withdrawal',
            'withdrawal' => $withdrawal
        ], 200);
    }

    public function deleteWithdrawal($id)
    {
        $withdrawal = Withdraw::where('id', $id)->first();

        if ($withdrawal == null) {
            return response()->json([
                'error' => 'Withdrawal not found'
            ]);
        } else {
            $withdrawal->delete();

            return response()->json([
                'message' => 'Deleted the withdrawal',
            ], 200);
        }

    }

}