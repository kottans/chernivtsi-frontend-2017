import React, { Component } from 'react';
import './App.css';
import dirImg from './dir.png';
import exeImg from './exe.png';
import fileImg from './file.png';
import homeImg from './home.png';

const imgTypes = {
  dir: dirImg,
  exec: exeImg,
  file: fileImg,
  root: homeImg
}

class TreeView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  toggle() {
    this.setState({visible: !this.state.visible});
  }

  classNames(classes) {
    return Object.entries(classes)
        .filter(([key, value]) => value)
        .map(([key, value]) => key)
        .join(' ');
  }

  render() {
    let childNodes;
    let classObj;
    let  myClass;

    if (this.props.node.data != null) {
      childNodes = this.props.node.data.map((node, index) => {
        return <li><TreeView node={node} /></li>
      });

      classObj = {
        togglable: true,
        "togglable-down": this.state.visible,
        "togglable-up": !this.state.visible
      };
      myClass = this.classNames(classObj);
    }

    return (
      <ul>
        <li onClick={this.toggle.bind(this)} className={myClass}>
          <img src={imgTypes[this.props.node.type]} />{this.props.node.name}
        </li>
        {this.state.visible &&
          <ul>
            {childNodes}
          </ul>
        }
      </ul>
    )
  }
}

export default TreeView;
