<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\SendCodeResetPassword;
use App\Models\ResetCodePassword;
use Auth;
use Http;
use Mail;
use App\Models\Wallet;
use Illuminate\Support\Facades\URL;
use JWTAuth;
use App\Models\User;
use Notification;
use App\Notifications\Register;
use App\Notifications\Message;
use Validator;
use App\Models\Email;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use App\Models\Withdraw;
use App\Models\Payment;


class UserController extends Controller
{
    //
    public function aboutMe()
    {
        if (Auth::check()) {
            $user = Auth::user();

            return response()->json([
                'user' => $user,
                "referrals_count" => $user->referrals->count(),
                "all_referrals" => $user->referrals,
                "total_in_wallet" => $user->wallet->withdrawable_balance,
                "deposits" => $user->wallet->deposit,
                "bets" => $user->wallet->bet,
                "bonus" => $user->wallet->bonus
            ]);
        }
    }

    public function allDeposits()
    {
        $deposits = Payment::all();
        return response()->json([
            'deposits' => $deposits

        ]);

    }

    public function allTransactions()
    {
        $deposits = Payment::all();
        $withdrawals = Withdraw::all();
        return response()->json([
            'deposits' => $deposits,
            'withdrawals' => $withdrawals
        ]);

    }

    public function allWithdrawals()
    {

        $allWithdrawals = Withdraw::all();
        return response()->json([
            'allWithdrawals' => $allWithdrawals
        ]);
    }

    public function openDash()
    {

        return view('tron');

    }
    public function makeAdmin($id)
    {
        $user = User::findOrFail($id);
        $user->update([
            'admin' => 1,
            'player' => 0
        ]);

        return response()->json([
            "message" => "Success",
            "user" => $user->username . " was made an admin",
            "note" => "mail sent to registered user"
        ], 200);
    }

    public function deleteUser($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return response()->json([
            'success' => true,
            'message' => 'User deleted successfully'
        ], 200);
    }

    public function allUsers()
    {
        $users = User::orderBy('created_at', 'desc')->get();

        function balance($users)
        {
            // $wallets = Wallet::all();
            $all_users = [];
            foreach ($users as $u) {
                $user_balance = $u->wallet->withdrawable_balance;
                $user = [
                    "user" => $u,
                    "balance" => $user_balance
                ];
                array_push($all_users, $user);
            }
            // foreach ($wallets as $w) {
            //     $user_info = $w->user;
            //     $total_balance = $w->withdrawable_balance;
            //     return $w;
            // }
            return $all_users;
        }
        // var_dump(balance($users));
        return response()->json([
            "users" => balance($users),
            // 'users' => $users

        ]);
    }

    public function allAdmins()
    {
        $admins = User::where('admin', 1)->orderBy('created_at', 'desc')->get();

        if ($admins->count() > 0) {
            return response()->json([
                'admins' => $admins
            ]);
        } else {
            return response()->json([
                'message' => 'You got no admins'
            ]);
        }
    }

    public function saveUser(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:100|unique:users',
            'username' => 'required|string|max:255|unique:users|regex:/^\S*$/u'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        } else {


            $user = User::create(
                array_merge(
                    $validator->validated(),
                    [
                        'password' => bcrypt("password",
                        ),
                    ]
                )
            );

            // Just creating a token for the user referral token

            $tokenize = rand(111111, 777777);
            $user->update([
                'referral_token' => strtolower($user->username) . $tokenize,
            ]);

            if ($request->has('phone')) {
                $user->update([
                    'phone' => $request->get('phone')
                ]);
            }

            Wallet::create([
                'user_id' => $user->id,
            ]);

            // $token = JWTAuth::fromUser($user);
            if ($user) {
                $details = [
                    "email" => $user->email
                ];
                $user->notify(new Register($details));
                return response()->json([
                    'message' => 'User successfully registered',
                    'user' => $user
                ], 201);
            } else {

                return response()->json([
                    'message' => 'User registration had an issue',
                ], 501);
            }
        }
    }

    public function counts()
    {
        $withdrawals = Withdraw::all();
        $wallet = Wallet::all();
        $deposits = Payment::all();


        $total_withdrawals = array_sum(json_decode($withdrawals->pluck('amount')));

        //We could decide to use the pluck statement instead of sum
        // $maya = json_decode($total_withdrawals);

        // $w = array_sum($maya);


        $total_deposits = Payment::where('final_amount', '>', 0)->sum('final_amount');
        $total_wallets = Wallet::where('withdrawable_balance', '>', 0)->sum('withdrawable_balance');
        
        return response()->json([
            "number_of_payments" => $deposits->count(),
            "number_of_wallets" => $wallet->count(),
            "number_of_withdrawals" => $withdrawals->count(),
            "total_withdrawals" => $total_withdrawals,
            "total_deposits" => $total_deposits,
            "total_wallets" => $total_wallets,

        ]);
    }

    public function sendMail(Request $request, $id)
    {


        $request->validate([
            'subject' => 'required',
            'content' => 'required',
        ]);

        $user = User::findOrFail($id);

        $email = Email::create([
            'subject' => $request->subject,
            'content' => $request->content,
            'user_id' => $user->id
        ]);


        if ($email) {

            $user->notify(new Message($email));
            return response()->json([
                'message' => 'Successfully sent email to ' . $user->username
            ]);
        }
    }
    public function authify()
    {
        return view('authify');
    }


    public function postAuthify(Request $request)
    {

        $credentials = request(['email', 'password']);


        if (!$token = auth()->attempt($credentials)) {
            return redirect()->back()->withMessage('Oops! You have entered invalid credentials');
        }
        //
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {

            return redirect()->route('openDash')->withHeader('Authorization', $token);
        }


    }

    protected function createNewToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
}