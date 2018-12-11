import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import FirstComponent from './components/FirstComponent';
import * as serviceWorker from './serviceWorker';

//que y donde

ReactDOM.render( <FirstComponent /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
