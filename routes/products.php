<?php

use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Business\VendorController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ProductController::class, 'listProducts'])->name('admin.manage.products');
Route::get('products/create', [ProductController::class, 'createProduct'])->name('admin.add.product');
Route::post('store-product', [ProductController::class, 'storeProduct'])->name('admin.product.create');
Route::get('product/edit/{product}', [ProductController::class, 'editProduct'])->name('admin.manage.product');
Route::put('update-product/{product}', [ProductController::class, 'updateProduct'])->name('admin.product.update');