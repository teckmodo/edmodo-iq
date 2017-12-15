import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock';

class Counter extends Component {
  render(){
    return (
      <div className="counter-container">
        <ReactCountdownClock
          seconds={60}
          color="#da9700"
          alpha={0.9}
          size={70}
        />
      </div>
    )
  }
}

export default Counter;
