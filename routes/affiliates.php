<?php

use App\Http\Controllers\AffiliateController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Business\VendorController;
use Illuminate\Support\Facades\Route;

Route::get('landing', [AffiliateController::class, 'landing'])->name('affiliates.landing');
Route::get('register', [AffiliateController::class, 'signup'])->name('affiliates.register');
Route::post('auth/login', [AffiliateController::class, 'processLogin'])->name('affiliates.post.signin');
Route::post('auth/register', [AffiliateController::class, 'processRegister'])->name('affiliates.post.signup');
Route::middleware(['auth:affiliates', 'verified'])->group(function () {
    Route::get('dashboard', [AffiliateController::class, 'dashboard'])->name('affiliates.dashboard');
});