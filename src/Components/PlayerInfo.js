import React, { Component } from 'react';
import ClassInfo from './ClassInfo';


class PlayerInfo extends Component {
  render() {
    return (
      <div className="player-info-container">

        <div className="self-info">
          <div className="avatar"></div>

          <div className="player-name">
            <p>Alterrique Ingram</p>
            <p>8th Grade</p>
          </div>
        </div>

        <div className="player-class">
          <p>Dr. Jones</p>
          <p>Algebra</p>
        </div>

      </div>
    )
  }
}

export default PlayerInfo;
