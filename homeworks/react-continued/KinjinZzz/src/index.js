import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './main.css'


import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';


ReactDOM.render(<App />, document.getElementById('root'));

