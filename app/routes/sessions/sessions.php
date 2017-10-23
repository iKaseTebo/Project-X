<?php

Route::get('/session', 'sessionController@checkSession');
Route::get('/session/{id}', 'sessionController@setSession');