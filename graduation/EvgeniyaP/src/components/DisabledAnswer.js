import React, { Component } from 'react';

export default class DisabledAnswer extends Component {
    render() {
        return (
            <div className = "disabled-answer">
                <button className = "btn">O</button>
                <span className = "disabled-links">{this.props.text}</span>
            </div>
        );
    }
}