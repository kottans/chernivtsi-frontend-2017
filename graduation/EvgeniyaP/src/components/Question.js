import React, {Component} from 'react';
import EnabledAnswer from './EnabledAnswer';
import DisabledAnswer from './DisabledAnswer';

export default class Question extends Component {

    onAnswerClick = (text) => {
        this.props.onAnswer({questionId: this.props.id, answer: text})
    }

    render () {
        const {question, correct_answer, incorrect_answers, userAnswer} = this.props.question
        const answers = [correct_answer, ...incorrect_answers]
        const correctOrIncorrect = userAnswer === correct_answer 
            ? <div className="correct">CORRECT</div> 
            : <div className="incorrect">INCORRECT</div>
        return (
            <div className="question-box">
                <p className="question-txt">{question}</p>
                <ul className="question-list">
                    {answers.map(answer => 
                        {return (!userAnswer 
                        ? <EnabledAnswer onClick = {this.onAnswerClick} key = {answer} text = {answer} />
                        : <DisabledAnswer key = {answer} text = {answer} />)})}
                </ul>
                    {userAnswer && correctOrIncorrect}
            </div>
        )
    }
}