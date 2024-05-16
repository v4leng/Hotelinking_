<?php

use App\Http\Controllers\CodeController;
use App\Http\Controllers\OfferController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/list_offers', [OfferController::class, 'list']);
Route::get('/list_codes', [CodeController::class, 'list']);
Route::post('/code-create', [CodeController::class, 'promotion']);
Route::put('/codes/{code}', [CodeController::class, 'redeem']);
Route::get('/codes_verify/{codeId}', [CodeController::class, 'getCodeRedeemedStatus']);




