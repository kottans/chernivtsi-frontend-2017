import React, { Component } from 'react';

class Folder extends Component {
    constructor(props) {
        super(props)
        this.state = { isDisplayChild: false };
    }

    renderView(tree) {
        if (tree) {
            return tree.map(file => {
                return (
                    <Folder key={file.name} treeData={file.data} name={file.name} />
                )
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    <div className='button-wrapper'>
                        {this.props.treeData && <button onClick={() => this.setState({ isDisplayChild: !this.state.isDisplayChild })}></button>}
                        <div>{this.props.name}</div>
                    </div>
                    {this.state.isDisplayChild && this.renderView(this.props.treeData)}
                </div>
            </div>
        );
    }

}

export default Folder