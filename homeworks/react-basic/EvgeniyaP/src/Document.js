import React, { Component } from 'react';

class Document extends Component {
    render(){ 
        return (
          	<div className="treeview">
                <div className="file"></div>
                <p>{this.props.name}</p>
            </div>
        );
    }
}
export default Document;