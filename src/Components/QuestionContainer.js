import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class QuestionContainer extends Component {
  renderAnswerOptions(answer, idx) {
    return <li key={idx} value={answer.type} onClick={this.props.onAnswerSelected}>{answer.content}</li>
  }

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
          <h4>{this.props.question}</h4>
        </div>

        <ul>
          {this.props.answerOptions.map((answers, idx) => this.renderAnswerOptions(answers, idx))}
        </ul>
      </div>
    </ReactCSSTransitionGroup>

    )
  }
}

export default QuestionContainer;
