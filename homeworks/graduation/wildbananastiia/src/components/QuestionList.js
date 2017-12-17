import React, { Component } from 'react';
import Answer from './Answer'

class Question extends Component {
  componentWillMount() {
    this.props.fetchQuestions();
  } 

  render() {
    const questionsList = this.props.questions
    return (
      <div className="App">
        {questionsList.length && this.renderView(questionsList)}
      </div>
    );
  }

  renderView(questions) {
    const questionsArr = questions.map((question, index) => {
      const options = [...question.incorrect_answers, question.correct_answer];
      return <div key={index}>
        <span>{question.question}</span>
        {options.map((option, index) => {
          return<div key={index}>
            <Answer answer={option} id={index} onAnswerClick={this.props.saveAnswer}/>
          </div>
        })}
      </div>
    })
    return questionsArr
  }
}

export default Question;