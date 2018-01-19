import React from 'react';

class Display extends React.Component {

  render() {
    return (
      <div className="display">{this.props.expression}</div>
    );
  }

}

export default Display;
