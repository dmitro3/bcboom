<?php

namespace App\Http\Controllers;

use App\Models\Promotion;
use App\Models\Wallet;
use App\Notifications\Bonus;
use Illuminate\Http\Request;
use Auth;

class PromotionController extends Controller
{
    public function approve($id){
        
    }

    public function save(Request $request){

        Promotion::updateOrCreate(
            [
                'type' => $request->type,
        ],
            [
                'percentage' => $request->percentage,
                'status' => 'Running'
                ]
        );



        return response()->json([
            'message' => 'Sucessfully created promotion.'
        ]);
    }

    public function edit(Request $request, $id){
        $promo = Promotion::findOrFail($id);
        if ($request->has('type')) {
            $promo->update([
                'type' => $request->get('type'),
            ]);
        }elseif($request->has('amount')) {
            $promo->update([
                'amount' => $request->get('amount'),
            ]);
        }elseif($request->has('percentage')) {
            $promo->update([
                'percentage' => $request->get('percentage'),
            ]);
        }elseif($request->has('status')) {
            $promo->update([
                'status' => $request->get('status'),
            ]);
        }
        return response()->json([
            'message' => 'Successfully edited',
        ]);
    }

    public function pause($id){
        $promo = Promotion::findOrFail($id);

        if($promo == null){
            return response()->json([
                'message' => 'Not found',
            ]);
        }else{
            $promo->update([
                'status' => 'Paused'
            ]);

            return response()->json([
                'message' => 'Successfully paused',
            ]);
        }
    }

    public function delete($id){
        $promo = Promotion::findOrFail($id);

        if($promo == null){
            return response()->json([
                'message' => 'Not found',
            ]);
        }else{
            $promo->delete();

            return response()->json([
                'message' => 'Successfully deleted',
            ]);
        }
    }

    public function all(){
        $promo = Promotion::all();

        return response()->json([
            'message' => 'All promos',
            'promos' => $promo
        ]);
    }

}