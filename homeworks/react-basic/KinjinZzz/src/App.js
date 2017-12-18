import React, { Component } from 'react';
import './App.css';
import TreeNode from './TreeNode';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			url: 'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/react-basic/filetree.json'
		}
	}
	componentWillMount() {
		fetch(this.state.url)
			.then(response => response.json())
			.then(data => this.setState({data:[data]}));
	}
	render() {
		return (
			<div className="App">
				<main>
					<TreeNode data={this.state.data} />
				</main>
			</div>
		);
	}
}
