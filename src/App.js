import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Player from './Player'




const App = (props) => {
  console.log(props.initialPlayers);
    return (
      <div className="App">
        <Header
        title="Scoreboard"
        totalPlayers ={props.initialPlayers.length}
        />
        {/*Add players here*/}
        {props.initialPlayers.map(
          player =>
          <Player
           playerName = {player.name}
          score = {player.score}
          key = {player.id.toString()}/>
        )}

      </div>
    );
  }


export default App;
