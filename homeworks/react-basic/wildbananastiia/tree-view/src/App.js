import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { treeData: [] };
    new Renderer().getTree().then(res => this.setState({ treeData: res }));
  }

  renderView(tree) {
    return (
      <div key={tree.name}> <div>{tree.name}</div>
        <div>{tree.data && tree.data.map(file => this.renderView(file))}</div>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {this.renderView(this.state.treeData)}
        </div>
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
  }
}
