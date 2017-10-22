<?php

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

use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

Route::get('/', function () {
//    dd('Hello');
    return view('welcome');
});

//    Route::match(['GET', 'POST'], '/show', 'PostsController@showMyView');
