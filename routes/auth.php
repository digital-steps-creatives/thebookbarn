<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\PaymentController;
use Illuminate\Support\Facades\Route;


Route::get('reset-my-password', [AuthController::class, 'passwordReset'])->name('reset.password');
Route::post('login-to-account', [AuthController::class, 'processLogin'])->name('signin.customer.vendor');
Route::post('register-to-account', [AuthController::class, 'processRegister'])->name('signup.customer.vendor');
Route::get('mpesa-callback', [PaymentController::class, 'callback'])->name('mpesa.callback');