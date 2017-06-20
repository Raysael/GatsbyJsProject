import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import './index.css';
import rootDOM from './root';

document.body.appendChild(rootDOM());

ReactDOM.render(<App />, document.getElementById('root'));
