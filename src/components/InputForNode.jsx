import React from 'react';
import Input from '../ui-components/Input';
import { nodeParamConfig } from './config';

const getItem = fieldKey =>
  nodeParamConfig.find(item => item.fieldKey === fieldKey);

const InputForNode = ({ fieldKey, handleChange, value, nodeIndex }) => (
  <Input
    handleChange={handleChange}
    value={value}
    placeholder={getItem(fieldKey).placeholder}
    fieldKey={fieldKey}
    text="text"
    key={fieldKey}
    formatting={getItem(fieldKey).formatting}
    index={nodeIndex}
  />
);

export default InputForNode;
