import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import '../styles/Player.css'
import Counter from './Counter.js'

class Player extends PureComponent {

  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
  };

    render () {
      const {
        id,
        score,
        index,
        playerName,
        removePlayer,
        changeScore
      } = this.props;

      return(
      <div className="player">
        <span className="player-name">
        <button className = "remove-player" onClick ={ () => removePlayer (id)}> ✖ </button>
          {playerName}
        </span>
        <Counter
         score= {score}
         index ={index}
         changeScore = {changeScore}
        />
      </div>
    );
  }
}


export default Player;
