import React from 'react';
import { render } from 'react-dom';
import { compose, createStore } from 'redux';
import todoApp from './reducers';
import Root from './components/Root';
import persistState from 'redux-localstorage';

const paths = 'todos';
const config = {key: 'todos'};
const enhancer = compose(
  persistState(paths, config),
)

let store = createStore(todoApp, enhancer);

render(
  <Root store={store} />,
  document.getElementById('root')
)