<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\WithdrawalController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\BonusController;
use App\Http\Controllers\ProfileController;

use App\Actions\Process;

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
    
    Route::post('password/forgot', [ForgotPasswordController::class,'forgot']);
    Route::post('password/reset', [ForgotPasswordController::class,'reset']);

// The new reset password links are as follows:

    Route::post('password/email',  [ForgotPasswordController::class, 'forgotPassword']);
    Route::post('password/code/check', [ForgotPasswordController::class, 'sendCode']);
    Route::post('password/resetcode', [ForgotPasswordController::class, 'resetPassword']);
    
});


Route::group(['middleware' => ['auth']], function () {
    
    // Profile
        Route::get('me',[UserController::class, 'aboutMe']);
    
        Route::post('image/update',[ProfileController::class, 'imageStore']);
        Route::post('update/username', [ProfileController::class, 'updateusername']);
        Route::post('update/bio', [ProfileController::class, 'updatebio']);
        Route::post('update/phone', [ProfileController::class, 'updatephone']);
        Route::get('/wallet/info', [BonusController::class, 'index']);

        Route::post('/withdrawal', [WithdrawalController::class, 'check']);
    
        // Payment routes
    
        Route::post('/payment/callback/{result}', [PaymentController::class, 'callback'])->name('callback');
    });
    Route::post('/payment/pay', [PaymentController::class, 'pay']);
    Route::post('/payment', [PaymentController::class, 'testpay']);
    
    Route::post('notifyurl', function(Request $request) {
        $callback = new Callback;
        
        return $callback->execute($request);
    });

    Route::post('notify', function(Request $request) {
        $process = new Process;
        return $process->status($request);
    });

    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
