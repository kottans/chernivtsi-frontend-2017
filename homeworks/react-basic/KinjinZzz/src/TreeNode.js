import React from 'react';
import Dir from './Dir';
import File from './File';

export default class Node extends React.Component {
    render() {
        return <div className="node">
            {this.props.data.map((node, i) => {
                return (node.type === 'dir' || node.type === 'root')
                    ? <Dir key={i} name={node.name ? node.name : 'root'} data={node.data} />
                    : (node.type === 'file' || node.type === 'exec')
                        ? <File key={i} name={node.name} />
                        : null;
            })}
        </div>;
    }
}