import React, { Component } from 'react';
import '../styles/Header.css'
import Stats from './Stats'
import Stopwatch from './Stopwatch'

const Header = (props) => {
    return (
      <header className = "header">
      <Stats
      players = {props.players}/>
      <h1>{props.title}</h1>
      <Stopwatch />
      </header>
    );
}

export default Header;
