<?php

use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\WithdrawalController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\BonusController;
use App\Http\Controllers\ProfileController;
use App\Utils\APIResponse;
use App\Actions\Process;
use App\Actions\Callback;
use App\Models\Payment;
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


    Route::prefix('admin')->group(
        function () {

            Route::post(
                'paym',
                function (Request $request) {
                        $aggregator = Aggregate::find($request->id);
                        if (!$aggregator)
                            return APIResponse::reject(1);

                        $wallet = Wallet::where('user_id', Auth::id())->first();

                        return Aggregate::find($aggregator->id())->wallet($wallet);
                    }
            );

            // Route::post('paymentStatus', function(Request $request) {
            //     $aggregator = null;
            //     foreach(Aggregate::list() as $ag) {
            //         if($ag->validate($request)) {
            //             $aggregator = $ag;
            //             break;
            //         }
            //     }
            //     if($aggregator == null) return 'Unknown aggregator';
    
            //     return $aggregator->status($request);
            // });
    
        }
    );


});


Route::middleware(['jwt.verify'])->group(function () {

    // Payment routes
    Route::post('/payment/callback/{result}', [PaymentController::class, 'callback'])->name('callback');

    Route::get(
        'notifywithdrawal',
        function (Request $request) {
            $callback = new Withdrawal;
            $callback->status($request);
        }
    );
    Route::post('/payment/pay', [PaymentController::class, 'pay']);
    Route::post('/payment', [PaymentController::class, 'testpay']);



    Route::post(
        'notify',
        function (Request $request) {
            $process = new Process;
            $process->status($request);
        }
    );

});
// Route::post('/notifypayment', [
//     PaymentController::class,
//     'callback'
// ]);


Route::post('/notifypayment', function (Request $request): string {
    $callback = new Callback;
    return $callback->run($request);
});




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});