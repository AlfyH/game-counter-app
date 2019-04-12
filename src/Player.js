import React, { Component } from 'react';
import './Player.css'
import Counter from './Counter.js'

const Player =(props)=> {
    return (
      <div className="player">
        <span className="player-name">
        <button className = "remove-player" onClick ={ () => props.removePlayer (props.id)}> ✖ </button>
          {props.playerName}
        </span>
        <Counter
        /*  score= {props.score} */
        />
      </div>
    );
  }

export default Player;
