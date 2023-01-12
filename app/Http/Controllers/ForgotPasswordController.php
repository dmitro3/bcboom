<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use App\Models\User;
use App\Mail\SendCodeResetPassword;
use App\Models\ResetCodePassword;
use Auth;
use Illuminate\Support\Facades\Mail;
use Notification;
use App\Notifications\Reset;


class ForgotPasswordController extends Controller
{
    //
    public function forgot(Request $request) {
        $credentials = $this->validate($request,[
            'email' => 'required|email',
        ]);

        $user = User::where('email', $request->email)->first();
        
        if($user){
            $status = Password::sendResetLink(
                $request->only('email')
            );
        return response()->json(["msg" => 'Reset password link sent on your email id.']);
    }else{
        return response()->json(["msg" => "Does Not exist"]);
    }
    }
    public function reset() {
   

        $credentials = request()->validate([
            'email' => 'required|email',
            'token' => 'required|string',
            'password' => 'required|string|confirmed'
        ]);

        $reset_password_status = Password::reset($credentials, function ($user, $password) {
            $user->password = $password;
            $user->save();
        });

        if ($reset_password_status == Password::INVALID_TOKEN) {
            return response()->json(["msg" => "Invalid token provided"], 400);
        }

        return response()->json(["msg" => "Password has been successfully changed"]);
    }


    //New Ones

    public function forgotPassword(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
        ]);
        $user = User::where('email', $data['email'])->first();
        if($user){        
        // Delete all old code that user send before.
        ResetCodePassword::where('email', $request->email)->delete();

        // Generate random code
        $data['code'] = mt_rand(100000, 999999);

        // Create a new code
        $codeData = ResetCodePassword::create($data);

        // Send email to user
        
        //     Mail::raw($codeData->code, function ($message) use($to) {  
            //     $message->to($to)->subject('Password Reset'); 
            // });
            $code = $codeData->code;
            $to = 'darl@gmail.com';
            Notification::send($user, new Reset($code));
        //  Mail::send(new SendCodeResetPassword($code))->to($to);



        return response(['message' => trans('passwords.sent')], 200);
    }else{
        return response(['message' => 'email not found'], 404);
    }

}
    

    public function sendCode(Request $request)
    {
        $request->validate([
            'code' => 'required|string|exists:reset_code_passwords',
        ]);

        // find the code
        $passwordReset = ResetCodePassword::firstWhere('code', $request->code);

        // check if it does not expired: the time is one hour
        if ($passwordReset->created_at > now()->addHour()) {
            $passwordReset->delete();
            return response(['message' => trans('passwords.code_is_expire')], 422);
        }

        return response([
            'code' => $passwordReset->code,
            'message' => trans('passwords.code_is_valid')
        ], 200);
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'code' => 'required|string|exists:reset_code_passwords',
            'password' => 'required|string|min:6|confirmed',
        ]);

        // find the code
        $passwordReset = ResetCodePassword::firstWhere('code', $request->code);

        // check if it does not expired: the time is one hour
        if ($passwordReset->created_at > now()->addHour()) {
            $passwordReset->delete();
            return response(['message' => trans('passwords.code_is_expire')], 422);
        }

        // find user's email 
        $user = User::firstWhere('email', $passwordReset->email);

        // update user password
        $user->update(bcrypt($request->only('password')));

        // delete current code 
        $passwordReset->delete();

        return response(['message' =>'password has been successfully reset'], 200);
    }
}