import React from 'react';
import Buttonmatrix from './Buttonmatrix.js';
import Display from './Display.js';

class PocketCalculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expression: "",
    }
    this.bigEventHandler = this.bigEventHandler.bind(this);
  }

  bigEventHandler(ev) {
    ev.stopPropagation();
    const text = ev.target.className != "row" ? ev.target.innerText : "";
    // keep in mind we want history, hence create copy!
    let expression = this.state.expression + text;

    this.setState({
      expression: expression,
    });
  }

  render() {

    return (
      <div>
        <Display expression={this.state.expression}/>
        <Buttonmatrix
          onClick={this.bigEventHandler}
          buttonmatrix={this.props.buttonmatrix}
        />
      </div>
    );

  }
}

export default PocketCalculator;
