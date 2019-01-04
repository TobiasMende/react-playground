import React, { Component } from 'react';
import Clock from './experiments/clock/Clock';
import Calculator from './experiments/calculator/Calculator';
import LocalStorageContent from './experiments/localStorage/LocalStorageContent';

class App extends Component {
  render() {
    return (
      <div className="container centered">
        <div className="row">
          <div className="col-sm-2">
            <Clock />
          </div>
          <div className="col-sm-3">
            <Calculator id="first" />
          </div>
          <div className="col-sm-3">
            <Calculator id="second" />
          </div>
          <div className="col-sm-3">
            <LocalStorageContent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
