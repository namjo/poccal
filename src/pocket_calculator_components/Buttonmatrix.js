import React from 'react';
import Button from './Button.js';

class Buttonmatrix extends React.Component {

  renderButton(buttonlabel, onClick) {
    // define callback depending on buttonlabel if AC, DEL, =, ...
    return (
      <Button
        label={buttonlabel}
        onClick={onClick}
      />
    );
  }


  render() {

    const btn_matrix = this.props.buttonmatrix.map((buttonrow, row) => {
      const btn_row = buttonrow.map((buttonlabel, col) => {
        return (
          // There must be a way to remove those unnecessary div tags!
          <div>
            {this.renderButton(buttonlabel, this.props.onClick)}
          </div>
        );
      });
      return (
        <div key={row} className="row">
          {btn_row}
        </div>
      );
    });

    return (
      <div>
        {btn_matrix}
      </div>
    );

  }
}

export default Buttonmatrix;
