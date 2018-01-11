import React, {Component} from 'react';
import Question from './Question';

export default class QuestionList extends Component {

    onQuestionAnswer = (args) => {
        this.props.onAnswer(args);
    }

    render() {
        return (
            <div>
                {this.props.questions
                .map(
                    (questions, index) => 
                    <Question onAnswer = {this.onQuestionAnswer} key = {index} id = {index} question = {questions} />)
                }
            </div>
        )
    }
}