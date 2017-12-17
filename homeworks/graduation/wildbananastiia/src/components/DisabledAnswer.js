import React, { Component } from 'react';

class DisabledAnswer extends Component {
    render() {
        return <div>
            <label>{this.props.answer}</label>
        </div>
    }
}

export default DisabledAnswer