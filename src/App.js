import React, { Component } from 'react';
import IQlogo from './imgs/IQlogo.png'
import YoutubeFrame from './Components/YoutubeFrame';
import './App.css';
import quizQuestions from './api/quizQuestions';
import { Grid, Row, Col } from 'react-bootstrap';
import QuestionContainer from './Components/QuestionContainer';
import SponsorCounter from './Components/SponsorCounter';
import PlayerInfo from './Components/PlayerInfo'
import Counter from './Components/Counter';
import ClassInfo from './Components/ClassInfo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        correct: 0,
        incorrect: 0,
      },
      result: '',
    }
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  renderQuiz() {
    return (
      <QuestionContainer
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  render() {
    return (
        <Grid>
          <Row>
            <Col xs={12} md={8} style={{padding: "0", backgroundColor: "black", height: "58.3vw"}}>
              <header>
                <img src={IQlogo} alt="IQlogo" className="App-logo"/>
              </header>
              <YoutubeFrame />
            </Col>

            <Col xs={6} md={4} style={{padding: "0"}}>
              <div className="question-container">
                <SponsorCounter />
                {this.renderQuiz()}
                <Counter />
              </div>
              <PlayerInfo />
              <ClassInfo />


            </Col>
          </Row>
        </Grid>

    );
  }
}

export default App;
