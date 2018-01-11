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
        <div> Number of correct answers: {questionsList.filter(question => {
          return (question.answer === question.correct_answer)
        }).length}</div>
        {questionsList.length && questionsList.map((question, index) =>
          <Question question={question} id={index} key={index} saveAnswer={this.props.saveAnswer} />
        )}
      </div>
    );
  }
}

export default QuestionList;