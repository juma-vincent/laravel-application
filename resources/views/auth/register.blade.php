@extends('layouts.app')

@section('content')
    <div class="d-flex flex-column">
    <form action="{{route('register.store')}}" method='post'>
		@csrf

        
		<label for='email'>Email</label>
		<input type='email' name='email' placehoder='Enter email'/>
		
        <label for='username'>Username</label>
		<input type='text' name='username' />

        <label for='password'>Password</label>
		<input type='password' name='password' />

		<button type='submit'>Submit</button>
	</form>
    </div>

@endsection