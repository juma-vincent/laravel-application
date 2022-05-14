<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function signup(){
        return view('auth.register');
    }

    public function store(Request $request){
        //Validate the data first
        validate($request, [
            'email'=> 'required',
            'username'=>'required',
            'password'=> 'required|min:10' //minimum of 10 characters
        ]);

        dd($request->email);
    }

}
