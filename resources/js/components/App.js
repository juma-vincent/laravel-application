import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './pages/homepage/homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Register from './pages/register/register';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
            <Routes> 
              <Route path='/' element={<Homepage />} />
              <Route path='/register' element={<Register />} />
            </Routes>
                
            </div>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('react-app')) {
    ReactDOM.render(<App />, document.getElementById('react-app'));
}
