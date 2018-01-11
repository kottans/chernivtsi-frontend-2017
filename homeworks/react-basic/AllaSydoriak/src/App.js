import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Folder from './Folder';
import File from './File';

const url = 'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/react-basic/filetree.json';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  componentWillMount() {
    fetch(url)
      .then(function(response){
        return response.json();
      })
      .then( response => {
        this.setState({data: response})
      })
      .catch(function(e) {
        console.log(e);
      })
  }

  render() {
    return (
      <div>
        <Folder name={this.state.data.type} data={this.state.data}/>
      </div>
    );
  }
}

export default App;
