<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class UserController extends Controller
{

    public function index()
    {
//        dd('Heeeello Finally');
        $users = DB::select('select * from users where gender = ?', ['m']);
//
        var_dump($users);
    }
}