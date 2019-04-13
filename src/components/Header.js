import React from 'react';
import '../styles/Header.css'
import Stats from './Stats'
import Stopwatch from './Stopwatch'
import PropTypes from 'prop-types'

const Header = ({players,title}) => {
    return (
      <header className = "header">
      <Stats
      players = {players}/>
      <h1>{title}</h1>
      <Stopwatch />
      </header>
    );
}

  Header.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.object)
  };

  Header.defaultProps = {
    title: 'Scoreboard'
  };

export default Header;
