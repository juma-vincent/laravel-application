import React from 'react';
import './register.scss';
import axios from 'axios';
import { useState } from 'react';


const Register = ()=>{

const [state, setState] = useState({ email:'', name:'', password:''});

const handleChange = (e)=>{
    
    const {name, value} = e.target;
    setState({ ...state, [name]:value });
   

}

const handleSubmit =async (e)=>{
    e.preventDefault();

    const {email, name, password} = state;
    const res= await axios.post('http://127.0.0.1:8000/api/auth/register',
    {
        email, name, password

    });
    console.log(res);

}
    return(
        <div className='login-container'>
            
            <h1>Register</h1>
                    <label htmlFor='email'> <span className='label-email'>Email </span> 
                        <input                      
                        name='email'                      
                        type='email'
                        value={state.email}
                        required
                        onChange={(e)=> handleChange(e)}
                        />
                    </label >

                    <label htmlFor='name'> <span className='label-name'>name </span> 
                        <input                      
                        name='name'                      
                        type='name'
                        value={state.name}
                        required
                        onChange={(e)=> handleChange(e)}
                        />
                    </label >

                    <label htmlFor='password'> <span className='label-password'>Password </span> 
                        <input                      
                        name='password'                      
                        type='password'
                        value={state.password}
                        required
                        onChange={(e)=> handleChange(e)}
                        />
                    </label >

            <button onClick={(e)=> handleSubmit(e)}>Register</button>

        </div>
    );
}

export default Register;