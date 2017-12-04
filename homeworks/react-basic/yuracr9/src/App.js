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

  componentWillMount() {
    fetch(this.state.myUrl)
      .then(response => {
        return response.json();
      })
      .then(response => {
        let arr = []; 
        arr.push(response);
        this.setState({ data: arr[0] });
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <ul>
        <TreeView node={this.state.data} />
      </ul>
    );
  }
}

export default App;
