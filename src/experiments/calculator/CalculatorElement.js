import React, { Component } from 'react';


class CalculatorElement extends Component {
    constructor() {
        super()
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        if (!this.isValid(e)) {
            return;
        }
        const value = e.target.value
        this.props.onChange(value)
    }

    isValid(e) {
        const value = e.target.value
        return !value || !isNaN(parseFloat(value))
    }

    render() {
        return (
            <div className="form-group" >
                <label htmlFor={this.props.name}>{this.props.title}</label>
                <input type="text" className="form-control" name={this.props.name} value={this.props.value} onChange={this.onChange} />
            </div>
        );
    }
}

export default CalculatorElement;
