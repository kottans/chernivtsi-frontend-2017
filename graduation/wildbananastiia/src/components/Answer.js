import React, { Component } from 'react';

class Answer extends Component {

    handleClick = () => {
        this.props.onAnswerClick(this.props.answer, this.props.id)
    }

    render() {
        return <div>
            <input type="checkbox" value={this.props.answer} onClick={this.handleClick} />
            <label>{this.props.answer}</label>
        </div>
    }
}

export default Answer