<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Business\VendorController;
use Illuminate\Support\Facades\Route;


Route::prefix('auth')->group( function(){
    Route::get('register', [VendorController::class, 'register'])->name('register.vendor');
    Route::get('login', [VendorController::class, 'login'])->name('login.vendor');
    Route::post('login-to-account', [VendorController::class, 'processLogin'])->name('signin.vendor');
    Route::post('register-to-account', [VendorController::class, 'processRegister'])->name('signup.vendor');
    Route::post('logout-to-account', [VendorController::class, 'logout'])->name('logout.vendor');
});

Route::middleware(['auth:vendors',config('jetstream.auth_session'),'verified'])->group(function () {
    Route::get('/dashboard', [VendorController::class, 'dashboard'])->name('vendor.dashboard');
    Route::post('/mark-as-read', [VendorController::class, 'markNotificationasRead'])->name('mark.read.all');
    Route::prefix('orders')->group( function(){
        Route::get('/', [VendorController::class, 'orders'])->name('orders.index');
        Route::get('/order/{order}', [VendorController::class, 'makeOrder'])->name('orders.order');
        Route::post('quote/create', [VendorController::class, 'saveQuotation'])->name('quote.generator');
    });
});