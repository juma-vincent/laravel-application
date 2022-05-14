<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use Illuminate\Http\Request; 

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/server/register', [RegisterController::class, 'signup'])->name('register.signup');
Route::post('/server/register', [RegisterController::class, 'store'])->name('register.store');

Route::get('/api', [MainController::class, 'login']);
Route::post('/api/auth/register', function(Request $request){
    // return response()->json([ 'name'=>'Juma', 'wife'=>'Nicole']);

    return $request;
});