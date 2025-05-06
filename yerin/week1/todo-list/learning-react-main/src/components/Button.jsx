import React from 'react';
import './Button.css';

function Button({ onClick, children, disabled }) {
  return (
    <button
      className="todo-button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
