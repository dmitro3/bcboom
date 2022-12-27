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

Route::get('/promotions/bonus_everyday', function () {
    return Inertia::render('Promotions/BonusEveryday');
   
});

Route::get('/promotions/full_bonus', function () {
    return Inertia::render('Promotions/FullBonus');
   
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

Route::get('/games/dinosaur', function () {
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

Route::get('/games/coin', function () {
    return Inertia::render('Game/CoinFlip');
   
});

Route::get('/games/tower', function () {
    return Inertia::render('Game/Tower');
   
});

Route::get('/games/stair', function () {
    return Inertia::render('Game/Stair');
   
});

Route::get('/games/ring', function () {
    return Inertia::render('Game/Ring');
   
});

Route::get('/games/limbo', function () {
    return Inertia::render('Game/Limbo');
   
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
