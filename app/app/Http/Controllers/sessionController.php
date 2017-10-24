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

    public function checkSession(Request $request){
        var_dump($request->session()->get('userSession'));
    }

    public function setSession( Request $request, $platform = false){

        $content = \GuzzleHttp\json_decode($request->getContent());
        if($platform == "fb") {
            $userSession['email'] = $content->email;
            $userSession['first_name'] = $content->first_name;
            $userSession['last_name'] = $content->last_name;
            $userSession['name'] = $content->name;
            $userSession['id'] = $content->id;
            $request->session()->put('userSession', $userSession);
        }elseif ($platform == 'gg'){

        }


    }

}