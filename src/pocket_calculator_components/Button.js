import React from 'react';

function Button(props) {
  return (
    <div
      className="btn"
      onClick={props.onClick} // this is the actual eventListener, many of which will be generated ...
    >
      {props.label}
    </div>
  );
}

export default Button;
