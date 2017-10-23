<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
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

    public function setSession( Request $request, $id){
        $request->session()->put('Hello', 'To You');
//        var_dump($id);
        var_dump($request->session()->get('Hello'));
    }
}