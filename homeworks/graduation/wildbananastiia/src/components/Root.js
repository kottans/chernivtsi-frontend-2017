import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import QuestionsList from '../containers/QuestionsList';

const Root = ({ store }) => (
  <Provider store={store}>
    <QuestionsList/>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root