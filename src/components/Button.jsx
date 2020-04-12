import React, {Fragment} from 'react';
import color from '../theme';

const Button = ({ label, handleChange, index = '', disabled=false }) => (
  <Fragment>
    <button
      type="submit"
      disabled={disabled}
      onClick={() => handleChange(index)}
    >
      {label}
    </button>
    <style jsx="true" global="true">
      {`
        button{
          background: ${color.primaryColor};
          color: ${color.white};
          padding: 10px 20px;
          border-radius: 3px;
          border: 'none',
          fontSize: '16px',
        }
         button:disabled {
           color: black;
           background:#cecccc;
         }
        `}
    </style>
  </Fragment>
);
export default Button;
