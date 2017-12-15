import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: 10
    }
  }

  render(){
    return (
      <div className="counter-container">
        <ReactCountdownClock
          seconds={this.state.seconds}
          color="#da9700"
          alpha={0.9}
          size={70}
          onComplete={this.props.showNext}
        />
      </div>
    )
  }
}

export default Counter;
