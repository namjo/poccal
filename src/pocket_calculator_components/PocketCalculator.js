import React from 'react';
import Buttonmatrix from './Buttonmatrix.js';
import Display from './Display.js';

class PocketCalculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expression: "",
    }
  }

  clickHandler = (ev) => {
    const text = ev.target.innerText;
    // keep in mind we want history, hence create copy!
    // make a switch case, but somehow I don t think this is good style ...
    let expression = text === "AC" || text === "DEL" || text === "=" ? this.state.expression : this.state.expression + text;

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
