import React from 'react';

function Button(props) {
  return (
    <button
      className="btn"
      onClick={props.onClick} // this is the actual eventListener, many of which will be generated ...
    >
      {props.label}
    </button>
  );
}

export default Button;
