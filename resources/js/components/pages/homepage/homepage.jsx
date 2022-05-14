import React from 'react';
import './homepage.scss';
import axios from 'axios';
import {Link } from 'react-router-dom';

const Homepage = ()=>{

    return(
        <div className='homepage-container'>
            <div className='homepage-header'></div>
            <h1>Homepage</h1>
            <Link to='/register'>Register</Link>
            <button onClick={async ()=> {
                const res= await axios.get('http://127.0.0.1:8000/api/');
                console.log(res); //data = res.json()


            }}>Click Me</button>

        </div>
    );
}

export default Homepage;