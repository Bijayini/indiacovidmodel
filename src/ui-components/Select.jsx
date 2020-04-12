/* eslint-disable react/prop-types */
import React from 'react';

const Select = ({ value, handleChange, fieldKey, options, testid }) => (
  <select
    value={value}
    data-testid={testid || fieldKey}
    onChange={e => handleChange(fieldKey, e.target.value)}
    style={{
      height: '40px',
      borderRadius: '3px',
      fontSize: '16px',
      display: 'table',
      margin: '0 auto 10px',
      width: '100%',
    }}
  >
    {options.map(item => {
      return (
        <option value={item.value} key={item.value}>
          {item.label}
        </option>
      );
    })}
  </select>
);

export default Select;
