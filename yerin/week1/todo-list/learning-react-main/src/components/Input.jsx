import React from 'react';
import './Input.css';

function Input({ value, onChange, placeholder }) {
  return (
    <input
      className="todo-input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
