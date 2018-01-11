import React, { Component } from 'react';
import './App.css';
import Folder from './components/Folder'

class App extends Component {
  constructor() {
    super();

    this.state = { treeData: [], isDisplayChild: false };
    new Renderer().getTree().then(res => this.setState({ treeData: res }));
  }

  render() {
    return <Folder treeData={this.state.treeData.data} name='root' />
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