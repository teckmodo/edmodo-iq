import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class QuestionContainer extends Component {
  render(){
    return(
      <ReactCSSTransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
      <div>

        <div className="question">
          <h4>What was Hulk’s original color?</h4>
        </div>

        <ul>
          <li>Gray</li>
          <li>Green</li>
          <li>Purple</li>
        </ul>
      </div>
    </ReactCSSTransitionGroup>

    )
  }
}

export default QuestionContainer;
