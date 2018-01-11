import React, { Component } from 'react';
import Answer from './Answer'
import DisabledAnswer from './DisabledAnswer'

class Question extends Component {
    render() {
        const { question } = this.props;
        const options = [...question.incorrect_answers, question.correct_answer];
        const correctness = question.answer === question.correct_answer ? "correct" : "incorrect";
        return <div key={this.props.id}>
            <span>{question.question}</span>
            {options.map((option, index) => {
                return <div key={index}>
                    {question.answer
                        ? <DisabledAnswer answer={option} />
                        : <Answer answer={option} id={this.props.id} onAnswerClick={this.props.saveAnswer} />
                    }
                </div>
            })}
            {question.answer && correctness}
        </div>
    }
}

export default Question