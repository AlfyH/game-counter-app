import React from 'react';

const Counter =(props) => { /*Class components can have states compard to function*/



  //
  // decrementScore = () => {
  //   if(this.state.score > 0){
  //     this.setState ( prevState => {
  //       return {
  //         score: prevState.score - 1
  //       }
  //     });
  //   };
  // }

  /*  decrementScore = () => {
      if(this.state.score > 0){
        this.setState({
            score: this.state.score - 1
        });
      }
    }
    */

 let index = props.index;

    return (
      <div className = "counter">
        <button className="counter-action decrement" onClick = {() => props.changeScore(index, -1)}> - </button>
        {/*this.props.score is used in class compared to props.score. use this.state.score to use states instead of props*/}
        <span className="counter-score">{props.score}</span>
        <button className="counter-action increment"onClick = {() => props.changeScore(index, +1)} > + </button>
      </div>
    );
  }


export default Counter;
