import React from 'react';
import './Button.css';

const Button = ({ text, link, variant = 'primary' }) => {
  return (
    <a href={link} className={`button ${variant}`}>
      {text}
      <span className="button-hover"></span>
    </a>
  );
}

export default Button;