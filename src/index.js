import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*const players = [
  {
    name: "Alfy",
    score: "50",
    id: 1
  },
  {
    name: "Emma",
    score: "40",
    id: 2
  },
  {
    name: "Shirin",
    score: "60",
    id: 3
  }
]*/

/*ReactDOM.render(<App initialPlayers={players}/>, document.getElementById('root'));*/
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
