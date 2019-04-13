import React, { Component } from 'react'

class Stopwatch extends Component {

  state ={
    isRunning: false,
    elapsedTime: 0,
    previoustime: 0
  };


componentDidMount(){
  this.intervalID = setInterval(() => this.tick() ,100);
}

componentWillUnmount(){
  clearInterval(this.intervalID);
}

tick = () =>{
  if (this.state.isRunning){
    const now = Date.now();
    this.setState( prevState => ({
      previousTime: now,
      elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
    }));
  }
}

  handleStopwatch = () => {
    this.setState( prevState => ({
      isRunning: !prevState.isRunning
    }));
    if (!this.state.isRunning){
       this.setState({
          previousTime: Date.now()
       });
    }
  }


  handleResetTime =() => {
    this.setState( prevState => ({
      elapsedTime: 0,

    }));
  }




  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className ="stopwatch-time"> { Math.floor(this.state.elapsedTime/1000)} </span>
        <button onClick = {this.handleStopwatch}>
        {/*Ternary operator, if isRunning is true, Stop if not Start*/}
        {this.state.isRunning ? 'Stop' : 'Start '}
        </button>
        <button onClick = {this.handleResetTime}> Reset </button>
      </div>
    );
  }
}

export default Stopwatch;
