import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Header from './Header'
import Player from './Player'


class App extends React.Component{

constructor() {
  super()
  this.state = {
    players: [
      {
        name: "Alfy",
        id: 1
      },
      {
        name: "Emma",
        id: 2
      },
      {
        name: "Shirin",
        id: 3
      }
    ]
  }
}
  handleRemoveplayer = (id) => {
    this.setState( prevState => {
      return {
      players: this.state.players.filter( p => p.id !== id)
      };
    });
  }

  render() {
    console.log('a');
    return (
      <div className="App">
        <Header
        title="Scoreboard"
        totalPlayers ={this.state.players.length}
        />
        {/*Add players here*/}
        {this.state.players.map(
          player =>
          <Player
          playerName = {player.name}
          removePlayer={this.handleRemoveplayer}
          id = {player.id}
  /*        score = {player.score}*/
          key = {player.id.toString()}/>
        )}

      </div>
    );}
  }


export default App;

{/*
  Application state
  Date that is available to the entire Application
  Component state
  State that is specific to a component and not shared outside of the component.
  */}
