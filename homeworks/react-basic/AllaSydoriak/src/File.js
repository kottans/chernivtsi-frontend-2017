import React, { Component } from 'react';

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