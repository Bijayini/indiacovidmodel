import React from 'react';
import color from '../theme';

const Button = ({ label, handleChange, index = '' }) => (
  <button
    style={{
      background: `${color.primaryColor}`,
      color: `${color.white}`,
      padding: '10px 20px',
      borderRadius: '3px',
      border: 'none',
      fontSize: '16px',
    }}
    type="submit"
    onClick={() => handleChange(index)}
  >
    {label}
  </button>
);
export default Button;
