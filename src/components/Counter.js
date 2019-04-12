import React, { Component } from 'react';

class Counter extends Component { /*Class components can have states compard to function*/

constructor(){
  super() /*So that you can use this.*/
  this.state = {
    score: 0
  }
}

  incrementScore = () => {
    this.setState( prevState => {
      return {
        score: prevState.score +1
      };
    });
  }

  decrementScore = () => {
    if(this.state.score > 0){
      this.setState ( prevState => {
        return {
          score: prevState.score - 1
        }
      });
    };
  }

  /*  decrementScore = () => {
      if(this.state.score > 0){
        this.setState({
            score: this.state.score - 1
        });
      }
    }
    */

 render() {
    return (
      <div className = "counter">
        <button className="counter-action decrement" onClick = {this.decrementScore.bind(this)}> - </button>
        {/*this.props.score is used in class compared to props.score. use this.state.score to use states instead of props*/}
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
      </div>
    );
  }
}

export default Counter;
