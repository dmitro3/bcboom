<?php

namespace App\Http\Controllers;

use App\Models\Promotion;
use App\Models\Wallet;
use App\Notifications\Bonus;
use Illuminate\Http\Request;
use Auth;

class PromotionController extends Controller
{
    public function activate($id){
        $promo = Promotion::findOrFail($id);

        if($promo == null){
            return response()->json([
                'message' => 'Not found',
            ]);
        }else{
            $promo->update([
                'status' => 'active'
            ]);

            return response()->json([
                'message' => 'Successfully Activated',
            ]);
        }
    }

    public function save(Request $request){

       $promo = Promotion::create([
        'title' => $request->title
        ]);
    if($promo->title < 3){

        if($request->type == 'withdrawal' || $request->type == 'deposit'){
        $promo->update([
            'type' => $request->type,
            'percentage' => $request->percentage,

        ]);
    }elseif($request->type == 'new_user'){
        $promo->update([
        'type' => $request->type,
        'percentage' => $request->percentage
        ]);
    }else{
        $promo->update([
            'type' => $request->type,
            'amount' => $request->amount
            ]);
    }

    $promo->update([
        'eligibility' => $request->eligibility
    ]);
    return response()->json([
        'message' => 'Successfully created promotion.'
    ]);
}else{
    return response()->json([
        'message' => $promo->title . ' has been used too many times.'
    ]);
    }      


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
        }elseif($request->has('eligibility')) {
            $promo->update([
                'eligibility' => $request->eligibility
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
            'message' => 'All promotions',
            'promos' => $promo
        ]);
    }

}