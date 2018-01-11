import React, {Component} from 'react';

export default class EnabledAnswer extends Component {

    onClick = () => {
        this.props.onClick(this.props.text)
    }

    render() {
        return (
            <div className="enabled-answer" onClick={this.onClick}>
               <button className="btn">O</button>
               {this.props.text}
            </div>
        )
    }
}