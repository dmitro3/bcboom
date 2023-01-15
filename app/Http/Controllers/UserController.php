<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\SendCodeResetPassword;
use App\Models\ResetCodePassword;
use Auth;
use Mail;
use Illuminate\Support\Facades\URL;

class UserController extends Controller
{
    //
    public function aboutMe(){
        if(Auth::check()){
            $user = Auth::user();
        
            return response()->json([
               'user' => $user,
               "referrals_count" => $user->referrals->count(),
               "all_referrals" => $user->referrals           
            ]);
        }
    }
    
}
