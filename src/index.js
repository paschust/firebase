import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAqVz-SIflKJji7FU4qCe2c2fXa6cXn2Do",
    authDomain: "crud1-51f0d.firebaseapp.com",
    databaseURL: "https://crud1-51f0d.firebaseio.com",
    projectId: "crud1-51f0d",
    storageBucket: "crud1-51f0d.appspot.com",
    messagingSenderId: "532355258884",
    appId: "1:532355258884:web:2bbfebb183314592e43351"
}

firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
