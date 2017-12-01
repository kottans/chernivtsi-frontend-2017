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
        console.log('checked');
    }
    render(){
        if(this.state.showChildren){
            console.log(this.props.data);
            return <div className="block">
                       <div className="folder-open" onClick={this.toggleState.bind(this)}></div>
                       <p>{this.props.name}</p>
                       <Node data = {this.props.data}/>
                   </div>;
        }
        else{
            console.log(this.props.data);
            return <div className="block">
                       <div className="folder" onClick={this.toggleState.bind(this)}></div>
                       <p>{this.props.name}</p>
                   </div>;
        }
    }
}