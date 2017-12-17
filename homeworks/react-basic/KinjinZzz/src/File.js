import React from 'react';

export default class File extends React.Component {
    render() {
        return <div className="node">
            <div className="file"></div>
            <p>{this.props.name}</p>
        </div>;
    }
}