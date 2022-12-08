<?php

use App\Http\Controllers\AffiliateController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Business\VendorController;
use Illuminate\Support\Facades\Route;

Route::get('/', [AffiliateController::class, 'landing'])->name('affiliates.landing');