import React, { Component } from 'react';
import './App.css';
import Node from './Node';

export default class App extends Component { 
	constructor(){
		super();
		this.state = {
			data: []
		}
	}
	componentWillMount(){
		fetch('https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/react-basic/filetree.json')
			.then(response => response.json())
			.then(data =>{
				if(data)
					this.setState({data: this.state.data.concat(data)});
			});
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Hello, this is file tree</h1>
				</header>
				<main>
					<Node  data = {this.state.data}/>
				</main>
			</div>
		);
	}
}
