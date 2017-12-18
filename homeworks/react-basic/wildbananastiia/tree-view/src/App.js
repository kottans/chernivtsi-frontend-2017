import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { treeData: [], isDisplayChild: true };
    new Renderer().getTree().then(res => this.setState({ treeData: res }));
  }

  render() {
    //debugger
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

class Folder extends Component {
  constructor(props) {
    super(props)
    this.state = { isDisplayChild: true };
  }

  renderView(tree) {
    if (tree) {
      return tree.map(file => {
        return (
          <Folder key={file.name} treeData={file.data} name={file.name} />
        )
      })
    }
  }

  render() {
    return (
      <div>
        <div>
          <div className='button-wrapper'>
            {this.props.treeData && <button onClick={() => this.setState({ isDisplayChild: !this.state.isDisplayChild })}></button>}
            <div>{this.props.name}</div>
          </div>
          {this.state.isDisplayChild && this.renderView(this.props.treeData)}
        </div>
      </div>
    );
  }

}
