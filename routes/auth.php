<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;


Route::get('reset-my-password', [AuthController::class, 'passwordReset'])->name('reset.password');