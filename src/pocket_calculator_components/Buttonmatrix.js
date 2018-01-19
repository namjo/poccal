import React, { Component } from 'react';

class Buttonmatrix extends React.Component {

  render() {

    const btn_matrix = this.props.buttonmatrix.map((buttonrow, row) => {

      const btn_row = buttonrow.map((button, col) => {
        return (
          <div key={row + "-" + button} className="btn">
            <p className="btn-text">{button}</p>
          </div>
        );
      });

      return (
        <div key={row} className="row">
          {btn_row}
        </div>
      );

    });

    return (<div>{btn_matrix}</div>);

  }
}

export default Buttonmatrix;
