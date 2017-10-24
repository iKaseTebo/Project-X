<?php


Route::post('/session/{platform}', 'sessionController@setSession');
Route::get('/session', 'sessionController@checkSession');