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
import update from 'react-addons-update'

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
      seconds: 10,
    }
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.setNextQuestion = this.setNextQuestion.bind(this);
    this.resetClock = this.resetClock.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  handleAnswerSelected(event) {

    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(()=>{ this.setNextQuestion()}, 5000);
    } else {
      setTimeout(() => {this.setResults(this.getResults())}, 5000);
    }
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });

    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer
    });
  }

  resetClock () {
    this.setState({
      seconds: 10
    })
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
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
      <div>
        <QuestionContainer
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
      </div>
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
