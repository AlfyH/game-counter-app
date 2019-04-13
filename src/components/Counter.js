import React from 'react';
import PropTypes from 'prop-types';

const Counter =({index,score,changeScore}) => {
  /*Class components can have states compard to function*/
    return (
      <div className = "counter">
        <button className="counter-action decrement" onClick = {() => changeScore(index, -1)}> - </button>
        {/*this.props.score is used in class compared to props.score. use this.state.score to use states instead of props*/}
        <span className="counter-score">{score}</span>
        <button className="counter-action increment"onClick = {() => changeScore(index, +1)} > + </button>
      </div>
    );
  }

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
};

export default Counter;
