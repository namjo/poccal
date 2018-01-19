import React, { Component } from 'react';
import Buttonmatrix from './Buttonmatrix.js';
import Display from './Display.js';

class PocketCalculator extends React.Component {

  render() {

    return (
      <div>
        <Display />
        <Buttonmatrix buttonmatrix = {this.props.buttonmatrix}/>
      </div>
    );

  }
}

export default PocketCalculator;
