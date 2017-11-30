import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    
    this.state = {treeData: ""}
    new Renderer().getTree().then(res=> this.setState({treeData: res}));
  }

  render() {
    let treeData;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {JSON.stringify(this.state.treeData)}
        </p>
      </div>
    );
  }
}

export default App;

class Renderer {
  async getTree() {
    const url = 'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/react-basic/filetree.json';
    return await fetch(url)
      .then(res => res.json())
      .then(res => res.data)
  }
}
