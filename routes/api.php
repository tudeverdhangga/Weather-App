<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Actions\GetWeather;
use App\Actions\GetForecast;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/weather', GetWeather::class);
Route::get('/forecast', GetForecast::class);
