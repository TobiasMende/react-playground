import React, { Component } from 'react';
import CalculatorElement from './CalculatorElement';
import PersistentComponent from '../persistent/PersistentComponent';

const MPH_TO_KMH = 1.60934

class Calculator extends PersistentComponent {
    constructor() {
        super()
        this.state = { kmh: '', mph: '' }
        this.onKmhChange = this.onKmhChange.bind(this)
        this.onMphChange = this.onMphChange.bind(this)
    }

    onKmhChange(value) {
        this.setState({kmh: value, mph: this.kmhToMph(value)})
    }

    onMphChange(value) {
        this.setState({kmh: this.mphToKmh(value), mph: value})
    }

    mphToKmh(value) {
        return this.convert(value, MPH_TO_KMH)
    }

    kmhToMph(value) {
        return this.convert(value, 1 / MPH_TO_KMH)
    }

    convert(value, multiple) {
        const float = parseFloat(value)
        if(isNaN(float)) {
            return ''
        }
        return float * multiple
    }

  render() {
    return (
        <form >
            <CalculatorElement name="kmh" title="Km/h" value={this.state.kmh} onChange={this.onKmhChange} />
            <CalculatorElement name="mph" title="Mph" value={this.state.mph} onChange={this.onMphChange} /> 
        </form>
    );
  }
}

export default Calculator;
