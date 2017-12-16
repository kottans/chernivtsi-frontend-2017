import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class File extends Component {
    render() {
        return (
            <div className="padding">
                <i className="fa fa-file">  {this.props.name}</i>
            </div>
        );
    }
}

export default File;