import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer, {},
    composeEnhancers(applyMiddleware(thunk.withExtraArgument('https://opentdb.com/api.php')))
);

ReactDOM.render(<Provider store={store}>
    <Router>
        <Route path="/" component={App} />
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();