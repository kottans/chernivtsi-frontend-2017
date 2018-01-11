import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import QuestionFetcherContainer from './containers/QuestionFetcherContainer';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="box-top-list">
                    <Link to="/easy">Easy</Link>
                    <Link to="/hard">Hard</Link>
                    <Link to="/medium">Medium</Link>
                    <Link to="/mixed">Any difficulty</Link>
                </div>
                <Route path="/:difficulty" component={QuestionFetcherContainer} />
            </div>
        );
    }
}