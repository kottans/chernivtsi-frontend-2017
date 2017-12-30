import React, { Component } from 'react';

class Question extends Component{
  componentWillMount(){
    this.props.fetchQuestions();
  }
  render() {
    return (
      <div className="App">
        {JSON.stringify(this.props.questions)}
      </div>
    );
  }
}

export default Question;