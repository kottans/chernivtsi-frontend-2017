import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import File from './File';

class Folder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleChilds: false
        };
        this.changeView = this.changeView.bind(this);
    }

    changeView() {
        this.setState({
            visibleChilds: !this.state.visibleChilds
        });
        
    }

    render() {
        return (
            <div className="padding">
                <div className={this.state.visibleChilds ? "fa fa-folder-open" : "fa fa-folder"} onClick={this.changeView}>  {this.props.name}</div>
                {this.state.visibleChilds && this.props.data.data.map((elem, index) => {
                    if(elem.type === 'root' || elem.type === 'dir'){
                        return <Folder key = {index} name = {elem.name} data = {elem}/>
                    } else if(elem.type === 'file' || elem.type === 'exec'){
                        return <File key = {index} name = {elem.name} />
                    }
                    return null;
                    })
                }
            </div>
        );
    }
}

export default Folder;
