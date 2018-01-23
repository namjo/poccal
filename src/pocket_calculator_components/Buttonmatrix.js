import React from 'react';
import Button from './Button.js';

class Buttonmatrix extends React.Component {

  renderButton(label, handler) {
    // define callback depending on buttonlabel if AC, DEL, =, ...
    return (
      <Button
        label={label}
        onClick={handler}
      />
    );
  }


  render() {
    const btn_matrix = this.props.buttonmatrix.map((buttonrow, row) => {
      const btn_row = buttonrow.map((button, col) => {
        return (
          // There must be a way to remove those unnecessary div tags!
          <div>
            {this.renderButton(button.label, button.handler)}
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
