import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TreeView from './TreeView';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      myUrl:  "https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/react-basic/filetree.json"
    }
  }

  getData() {
    fetch(this.state.myUrl)
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.state.data.push(response);
        this.setState({ data: this.state.data[0] });
      })
      .catch(e => console.log(e));
  }

  render() {
    this.getData();
    return (
      <TreeView node={this.state.data} />
    );
  }
}

export default App;
