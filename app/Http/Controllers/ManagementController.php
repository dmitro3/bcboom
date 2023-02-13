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

        dd($withdrawal);


        if ($withdrawal !== Null) {
            $runWithdrawal->handle($withdrawal);

            $accept = $withdrawal->update([
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
            'status' => 'Rejected',
            'rejected' => true
        ]);

        return response()->json([
            'message' => 'Rejected the withdrawal',
            'withdrawal' => $withdrawal
        ], 200);
    }

    public function ignoreWithdrawal($id)
    {
        $withdrawal = Withdraw::where('id', $id)->first();

        $withdrawal->update([
            'status' => 'Ignored',
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

        $withdrawal->delete();

        return response()->json([
            'message' => 'Deleted the withdrawal',
        ], 200);
    }

}