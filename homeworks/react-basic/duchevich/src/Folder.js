import React from 'react';
import Node from './Node';

export default class Folder extends React.Component{
    constructor(){
        super();
        this.state = {
			showChildren: false
		}
    }
    toggleState(){
        this.setState({
            showChildren: !this.state.showChildren
        })
    }
    render(){
        return (
             <div className="block">
                    <div className={this.state.showChildren ? 'folder-open' : 'folder'} onClick={this.toggleState.bind(this)}></div>
                    <p>{this.props.name}</p>
                    {this.state.showChildren ? <Node data = {this.props.data} /> : null}
            </div>
        )
    }
}