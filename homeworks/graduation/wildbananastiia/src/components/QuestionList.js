import React, { Component } from 'react';
import Question from './Question'

class QuestionList extends Component {
  componentWillMount() {
    this.props.fetchQuestions();
  }

  render() {
    const questionsList = this.props.questions
    return (
      <div className="App">
        {questionsList.length && questionsList.map((question, index) =>
          <Question question={question} id={index} saveAnswer={this.props.saveAnswer} />
        )}
      </div>
    );
  }
}

export default QuestionList;