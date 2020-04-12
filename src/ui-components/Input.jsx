/* eslint-disable react/prop-types */
import React from 'react';
import { TextField } from '@material-ui/core';
// const numberRegxWithComma = new RegExp('^[0-9]{1,3}(,[0-9]{3})*\.[0-9]+$');

const checkValidation = (fieldKey, value, handleChange, formatting, index) => {
  if (formatting === 'toInt' || formatting === 'toFloat') {
    /^\d*\.?\d*$/.test(value) && handleChange(fieldKey, value, index);
    return;
  }
  handleChange(fieldKey, value, index);
};

const Input = ({
  value,
  placeholder,
  handleChange,
  fieldKey,
  formatting,
  error = '',
  index,
}) => (
  <div style={{ marginBottom: '15px', flex: '0 50%', padding: '0 5px' }}>
    <TextField
      id={fieldKey}
      name={fieldKey}
      label={placeholder}
      placeholder={placeholder}
      onChange={e =>
        checkValidation(
          fieldKey,
          e.target.value,
          handleChange,
          formatting,
          index,
        )
      }
      value={value}
      fullWidth
      variant="outlined"
    />
    {Boolean(error) && <div className="error">{error}</div>}
  </div>
);
export default Input;
