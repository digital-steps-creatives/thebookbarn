<?php

use App\Http\Controllers\Api\AuthController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\Auth\SocialController;

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

Route::get('/', [FrontController::class, 'home']);
Route::get('/cart', [FrontController::class, 'cart'])->name('cart');
Route::prefix('auth')->group( function(){
    Route::prefix('google')->group( function(){
        Route::get('/redirect', [SocialController::class, 'googleRedirectToProvider'])->name('google.redirect');
        Route::get('/callback', [SocialController::class, 'handleGoogleCallback']);
    });
    Route::prefix('facebook')->group( function(){
        Route::get('/redirect', [SocialController::class, 'facebookRedirectToProvider'])->name('facebook.redirect');
        Route::get('/callback', [SocialController::class, 'handleFacebookCallback']);
    });
    Route::middleware('web')
    ->prefix('customer')
    ->group(base_path('routes/auth.php'));
    //Vendors
    Route::prefix('vendors')->group(base_path('routes/vendors.php'));
});
Route::prefix('backoffice')->group( function(){
    Route::get('forgot-password', [AuthController::class, 'resetpassword'])->name('admin.reset.password');
});
Route::middleware(['auth:sanctum',config('jetstream.auth_session'),'verified'])->group(function () {
    Route::get('/dashboard', function () {return Inertia::render('Dashboard');})->name('dashboard');
    Route::get('/orders', [FrontController::class, 'orders'])->name('myorders');
    Route::get('/view-quote/{order}', [FrontController::class, 'viewOrder'])->name('view.order.final');
});
