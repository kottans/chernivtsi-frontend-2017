import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import { createStore, applyMiddleware, compose } from 'redux';
import quetionApp from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    quetionApp, {},
    composeEnhancers(applyMiddleware(thunk))
);

render(
    <Root store={store} />,
    document.getElementById('root')
)