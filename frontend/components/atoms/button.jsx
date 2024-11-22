import React from 'react';

const Button = ({ type = 'button', children, onClick }) => (
  <button type={type} onClick={onClick} className="btn">
    {children}
  </button>
);

export default Button;