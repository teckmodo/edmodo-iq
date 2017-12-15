import React, { Component } from 'react';
import MarvelLogo from '../imgs/Marvel-Logo.png';

class SponsorCounter extends Component {
  render(){
    return (
      <div>
        <p className="sponsored-by">Sponsored by:</p>
        <img src={MarvelLogo} alt="MarvelLogo" id="marvel-logo"/>
      </div>
    )
  }
}

export default SponsorCounter;
