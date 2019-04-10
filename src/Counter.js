import React, { Component } from 'react';

const Counter = (props) => {

    return (
      <div className = "counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{props.score}</span>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }



export default Counter;
