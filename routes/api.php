<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\PaymentController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('products/search',[FrontController::class, 'searchItems'])->name('products.search');
Route::post('login', [AuthController::class, 'signin']);
Route::post('register', [AuthController::class, 'signup']);
Route::prefix('content')->group( function(){
    Route::get('books/list', [BookController::class, 'getBooks']);
    Route::get('order/find/{order}', [FrontController::class, 'getOrder'])->name('get.orders');
});
Route::prefix('orders')->group( function() {
    Route::post('create', [OrderController::class, 'store'])->name('orders.store');
    Route::get('list', [OrderController::class, 'index']);
    Route::post('update/{order}', [OrderController::class, 'update'])->name('orders.update');
    Route::post('/accept/quote/{order}', [FrontController::class, 'acceptOrder'])->name('accept.order.final');
    
});
Route::prefix('v1')->group( function(){
    Route::prefix('payments')->group( function(){
        Route::post('stk/push', [PaymentController::class, 'customerMpesaSTKPush'])->name('make.mpesa.payment');
        Route::post('transaction/confirmation',[PaymentController::class, 'paymentStatus'])->name('confirm.payment');
    });
});
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('logout', [AuthController::class, 'logout']);
    
});
