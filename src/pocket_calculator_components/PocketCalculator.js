import React from 'react';
import Buttonmatrix from './Buttonmatrix.js';
import Display from './Display.js';

class PocketCalculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expression: "",
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(ev) {

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
          onClick={this.clickHandler}
          buttonmatrix={this.props.buttonmatrix}
        />
      </div>
    );

  }
}

export default PocketCalculator;
