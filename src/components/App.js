import React from 'react';
//import logo from '../logo.svg';
import '../styles/App.css';
import Header from './Header'
import Player from './Player'
import AddPlayerForm from './AddPlayerForm'


class App extends React.Component{

state = {
    players: [
      {
        name: "Alfy",
        score: 0,
        id: 1
      },
      {
        name: "Emma",
        score: 0,
        id: 2
      },
      {
        name: "Shirin",
        score: 0,
        id: 3
      }
    ]
  };


// player id Counter

 prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
        score: prevState.players[index].score += delta
    }));
  }

//prebState is a preferred method to prevent state inconsistencies. Might be fixed with redux.
  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          /*this spread operator adds the new player into the previous array*/
           ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  }

  handleRemoveplayer = (id) => {
    this.setState( prevState => {
      return {
      players: this.state.players.filter( p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="App">
        <Header players ={this.state.players}
        />
        {/*Add players here*/}
        {this.state.players.map( (player, index) =>
          <Player
          playerName = {player.name}
          removePlayer={this.handleRemoveplayer}
          changeScore ={this.handleScoreChange}
          id = {player.id}
          score = {player.score}
          index = {index}
          key = {player.id.toString()}/>

        )}
          <AddPlayerForm
          addPlayer ={this.handleAddPlayer}
          />

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
