import React, { Component } from 'react';
class PocketCalculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonmatrix: [
        ["AC", "DEL", "(", ")"],
        ["1", "2", "3", "+"],
        ["4", "5", "6", "-"],
        ["7", "8", "9", "*"],
        ["0", ".", "=", "/"],
      ],
      expression: null, // put expressions in history later ...
    };
  }

  render() {

    const btn_matrix = this.state.buttonmatrix.map((buttonrow, row) => {

      const btn_row = buttonrow.map((button, col) => {
        return (<div key={row + "-" + button} className="btn">{button}</div>);
      });

      return (
        <div key={row}>
          {btn_row}
        </div>
      );

    });

    return (
      <div>
        <div>display!</div>
        <div>{btn_matrix}</div>
      </div>
    );

  }
}

export default PocketCalculator;
