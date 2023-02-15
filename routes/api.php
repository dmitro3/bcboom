<?php

use App\Http\Controllers\GameController;
use App\Http\Controllers\PromotionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\WithdrawalController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\BonusController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ManagementController;
use App\Utils\APIResponse;
use App\Actions\Process;
use App\Actions\Callback;
use App\Models\Wallet;
use App\Actions\Withdrawal;
use App\Paym\Aggregate;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register'])->name('open');
    Route::get('/register', [AuthController::class, 'showRegistrationForm'])->name('registerapi');
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
});

Route::middleware(['middleware' => 'api'])->group(function () {

    // Update password here currently works but I created another update
// link that sends a reset code to the user instead of utilizing Laravel update link

    Route::post('password/forgot', [ForgotPasswordController::class, 'forgot']);
    Route::post('password/reset', [ForgotPasswordController::class, 'reset']);

    // The new reset password links are as follows:

    Route::post('password/email', [ForgotPasswordController::class, 'forgotPassword']);
    Route::post('password/code/check', [ForgotPasswordController::class, 'sendCode']);
    Route::post('password/resetcode', [ForgotPasswordController::class, 'resetPassword']);

});



Route::group(['middleware' => ['jwt.verify']], function () {
    Route::post('/withdrawal', [WithdrawalController::class, 'handle']);

    // Profile
    Route::get('me', [UserController::class, 'aboutMe']);

    Route::post('image/update', [ProfileController::class, 'imageStore']);
    Route::post('update/username', [ProfileController::class, 'updateusername']);
    Route::post('update/bio', [ProfileController::class, 'updatebio']);
    Route::post('update/phone', [ProfileController::class, 'updatephone']);
    Route::get('/wallet/info', [BonusController::class, 'index']);
    Route::get('/all/payments', [PaymentController::class, 'transactions']);
    Route::get('/all/withdrawals', [WithdrawalController::class, 'transactions']);


});


Route::get('all/deposits', [
    UserController::class,
    'allDeposits'
]);

Route::get('admin/all/withdrawals', [
    UserController::class,
    'allWithdrawals'
]);


Route::get('notifywithdrawal', function (Request $request) {
    $callback = new Withdrawal;
    $callback->status($request);
});

Route::post('/notifypayment', [
    PaymentController::class,
    'callback'
]);

Route::middleware(['jwt.verify'])->group(function () {

    // Payment routes
    Route::post('/payment/callback/{user}', [PaymentController::class, 'callback'])->name('callback');

    Route::post('/payment/pay', [PaymentController::class, 'pay']);
    Route::post('/payment', [PaymentController::class, 'testpay']);

    Route::post('update/profile', [
        ProfileController::class,
        'updateProfile'
    ]);

    Route::post(
        'notify',
        function (Request $request) {
            $process = new Process;
            $process->status($request);
        }
    );

    Route::get('games/all', [
        GameController::class,
        'all_games'
    ])->name('all_games');

    Route::post('game/new', [
        GameController::class,
        'new_game'
    ]);

    route::get('games/my', [
        GameController::class,
        'my_games'
    ]);

});
Route::middleware(['jwt.verify', 'admin'])->group(function () {

    Route::get('approval/withdrawals', [
        ManagementController::class,
        'withdrawalRequests'
    ]);

    Route::get('reject/withdrawal/{id}', [
        ManagementController::class,
        'rejectWithdrawal'
    ]);

    Route::get('ignore/withdrawal/{id}', [
        ManagementController::class,
        'ignoreWithdrawal'
    ]);

    Route::get('delete/withdrawal/{id}', [
        ManagementController::class,
        'deleteWithdrawal'
    ]);

    Route::get('approve/withdrawal/{id}', [
        ManagementController::class,
        'approveWithdrawal'
    ]);

    Route::get('make/admin/{id}', [
        UserController::class,
        'makeAdmin'
    ]);

    Route::get('admin/counts', [
        UserController::class,
        'counts'
    ]);

    Route::get('users/all', [
        UserController::class,
        'allUsers'
    ])->name('allUsers');

    Route::get('admins/all', [
        UserController::class,
        'allAdmins'
    ])->name('allAdmins');

    Route::post('user/save', [
        UserController::class,
        'saveUser'
    ])->name('saveUser');

    Route::get('delete/user/{id}', [
        UserController::class,
        'deleteUser'
    ])->name('deleteUser');


    Route::post('ban/user/{id}', [
        UserController::class,
        'banUser'
    ])->name('banUser');

    Route::post('email/send/{id}', [
        UserController::class,
        'sendMail'
    ])->name('sendMail');

    Route::post('/games/delete/{id}', [
        GameController::class,
        'delete'
    ]);


    Route::post('/promotion/approve/{id}', [
        PromotionController::class,
        'approve'
    ])->name('approve');

    Route::post('/promotion/reject/{id}', [
        PromotionController::class,
        'reject'
    ])->name('reject');

    Route::post('/promotion/delete/{id}', [
        PromotionController::class,
        'delete'
    ])->name('delete');

    Route::get('promotions/all', [
        PromotionController::class,
        'all_promotions'
    ])->name('all_promotions');

    Route::post(
        'notify',
        function (Request $request) {
            $process = new Process;
            return $process->status($request);
        }
    );

});
// Route::post('/notifypayment', [
//     PaymentController::class,
//     'callback'
// ]);


Route::post(
    'notifywithdrawal',
    function (Request $request) {
        $callback = new Withdrawal;
        return $callback->status($request);
    }
);
Route::post('/notifypayment', function (Request $request): string {
    $callback = new Callback;
    return $callback->run($request);
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});