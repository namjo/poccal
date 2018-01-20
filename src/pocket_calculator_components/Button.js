import React from 'react';

function Button(props) {
  return (
    <button
      className="btn"
      onClick={props.onClick} // this is the actual eventListener!
    >
      {props.label}
    </button>
  );
}

export default Button;
