import React, { Component } from 'react';

class Clock extends Component {
    constructor() {
        super()
        this.state = { time: new Date() }
        this.tick = this.tick.bind(this)
    }

    componentDidMount() {
        this.timerId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick() {
        this.setState({ time: new Date() })
    }

    render() {
        return (
            <h4 className="display-4">{this.state.time.toLocaleDateString()} {this.state.time.toLocaleTimeString()}</h4>
        );
    }
}

export default Clock;
