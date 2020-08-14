import React from 'react';

function Input(props) {
  return (
    <input
      onChange={props.onChange}
      value={props.value}
      name={props.name}
      autoComplete={props.autoComplete}
      placeholder={props.placeholder}
      className="input"
    />
  );
}

export default Input;
