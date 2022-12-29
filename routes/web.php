<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Index');
});
Route::get('/fairness', function () {
    return Inertia::render('Fairness/Index');
   
});

Route::get('/promotions/exclusive', function () {
    return Inertia::render('Promotions/Exclusive');
});
Route::get('/promotions', function () {
    return Inertia::render('Promotions/Index');
});

Route::get('/promotions/deposit', function () {
    return Inertia::render('Promotions/Deposit');
   
});

Route::get('/promotions/bonus', function () {
    return Inertia::render('Promotions/Bonus');
   
});
Route::get('/promotions/full-bonus', function () {
    return Inertia::render('Bonus/FullBonus');
   
});

Route::get('/bonus/bonus-everyday', function () {
    return Inertia::render('Bonus/BonusEveryday');
   
});

Route::get('/bonus/full-bonus', function () {
    return Inertia::render('Bonus/FullBonus');
   
});

Route::get('/promotions/distributor', function () {
    return Inertia::render('Promotions/Distributor');
   
});


Route::get('/promotions/invite', function () {
    return Inertia::render('Promotions/Invite');
});

Route::get('/games', function () {
    return Inertia::render('Games/Index');
});
Route::get('/slots', function () {
    return Inertia::render('Slots/Index');
});
Route::get('/race', function () {
    return Inertia::render('Race/Index');
});
Route::get('/live-casino', function () {
    return Inertia::render('LiveCasino/Index');
});
Route::get('/bonus', function () {
    return Inertia::render('Bonus/Index');
});
Route::get('/vip', function () {
    return Inertia::render('VIP/Index');
});
// Route::get('/vip', function () {
//     return Inertia::render('VIP/Index');
// });

Route::get('/games/crash', function () {
    return Inertia::render('Game/Dinosaur');
   
});

Route::get('/games/dice', function () {
    return Inertia::render('Game/Dice');
   
});

Route::get('/games/mines', function () {
    return Inertia::render('Game/Mines');
   
});

Route::get('/games/keno', function () {
    return Inertia::render('Game/Keno');
   
});

Route::get('/games/wheel', function () {
    return Inertia::render('Game/Wheel');
   
});

Route::get('/games/coin-flip', function () {
    return Inertia::render('Game/CoinFlip');
   
});

Route::get('/games/tower', function () {
    return Inertia::render('Game/Tower');
   
});

Route::get('/games/stairs', function () {
    return Inertia::render('Game/Stair');
   
});

Route::get('/games/roulette', function () {
    return Inertia::render('Game/Ring');
   
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
