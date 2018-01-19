import React from 'react';
import Buttonmatrix from './Buttonmatrix.js';
import Display from './Display.js';

class PocketCalculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expression: null,
    }
  }

  bigEventHandler() {
    const buttonmatrix = this.props.buttonmatrix;
    this.setState({
      expression: "hi",
    });
  }

  render() {

    return (
      <div>
        <Display expression={this.state.expression}/>
        <Buttonmatrix
          onClick={() => this.bigEventHandler() /* Wrap anonymous function around handler to bind this. Otherwise: this.bigEventHandler.bind(this) */}
          buttonmatrix={this.props.buttonmatrix}
        />
      </div>
    );

  }
}

export default PocketCalculator;
