<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class SessionController extends Controller
{

    public function index()
    {
        var_dump('Hello');
    }

    public function checkSession(){
        var_dump('Session Exists.');
    }

    public function setSession($id){
        var_dump($id);
    }
}