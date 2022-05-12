import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './pages/homepage/homepage';

function App() {
    return (
        <div className="container">
            <Homepage />
        </div>
    );
}

export default App;

if (document.getElementById('react-app')) {
    ReactDOM.render(<App />, document.getElementById('react-app'));
}
