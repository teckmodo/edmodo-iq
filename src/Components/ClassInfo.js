import React, { Component } from 'react';

class ClassInfo extends Component {
  render(){
    return(
      <div className="class-info">
        <div>
          <h5>Classmates</h5>
          <h3>142</h3>
        </div>

        <div>
          <h5>Class Rank</h5>
          <h3>15/<span className="fraction">600</span></h3>
        </div>

        <div>
          <h5>Extra Lives</h5>
          <h3>0</h3>
        </div>
      </div>
    )
  }
}

export default ClassInfo;
