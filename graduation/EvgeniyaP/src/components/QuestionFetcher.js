import React, { Component } from 'react';
import QuestionListContainer from '../containers/QuestionListContainer';

export default class QuestionFetcher extends Component {
    componentDidMount() {
        this.props.fetchQuestions();
    }

    componentDidUpdate() {
        this.props.fetchQuestions();
    }

    render() {
        return <QuestionListContainer />;
    }
}