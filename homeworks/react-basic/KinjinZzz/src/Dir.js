import React from 'react';
import TreeNode from './TreeNode';

export default class Dir extends React.Component{
    constructor(){
        super();
        this.state = {
			open: false
		}
    }
    toggle(){
        this.setState({
            open: !this.state.open
        })
    }
    render(){
        return (
             <div className="node">
                    <div className={this.state.open ? 'open' : 'closed'} onClick={this.toggle.bind(this)}></div>
                    <p>{this.props.name}</p>
                    {this.state.open && <TreeNode data = {this.props.data} />}
            </div>
        )
    }
}