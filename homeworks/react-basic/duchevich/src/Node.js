import React from 'react';
import Folder from './Folder';
import File from './File';

export default class Node extends React.Component{
    render(){
        return <div className="block">
                    {this.props.data.map((node, i) =>{
                        if(node.type === 'root'){
                            let name = 'root';
                            return <Folder key = {i} name = {name} data = {node.data}/>
                        }
                        if(node.type === 'dir')
                            return <Folder key = {i} name = {node.name} data = {node.data}/>
                        if(node.type === 'file' || node.type === 'exec')
                            return <File key = {i} name = {node.name} />
                        return null;
                    })}
                </div>;    
    }
}