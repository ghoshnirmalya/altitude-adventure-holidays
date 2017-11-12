import React from 'react';

const Arrow = (props) => {
  return (
    <img
      src={props.icon}
      className={ props.className }
      onClick={ props.onClick }
    />
  );
}

export default Arrow;
