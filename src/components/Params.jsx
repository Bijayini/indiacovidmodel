import React from 'react';
import { MenuItem, Select, InputLabel } from '@material-ui/core';
import { paramConfig } from './config';
import Input from '../ui-components/Input';
import Button from './Button';

const Params = ({
  params,
  handleChangeParam,
  addParam,
  handleParamValueChange,
  index,
  handleParamIntervationChange,
}) => (
  <div className="box">
    <h1 className="heading">{paramConfig.label}</h1>
    <Button handleChange={addParam} label="Add Param +" index={index} />
    {Boolean(params.length) &&
      params.map(item => (
        <div className="cloning-element">
          <div className="flex-item">
            <InputLabel id="demo-simple-select-helper-label">Select Param</InputLabel>
            <Select
              labelId="select-param"
              id="select-param"
              value={(item && item.field) || 'Select Param'}
              style={{
                width: '100%',
                padding: '4px 0',
                background: '#fff',
              }}
              onChange={e => handleChangeParam(e.target.value, item.id, index)}
            >
              {paramConfig.paramKeys.map(ddItem => (
                <MenuItem value={ddItem}>{ddItem}</MenuItem>
              ))}
            </Select>
          </div>
          <div className="flex-item">
            <Input
              handleChange={handleParamValueChange}
              value={item.value}
              placeholder="Please Enter Param Value"
              fieldKey={item.id}
              index={index}
              text="text"
              key={item.id}
              id={item.id}
              formatting={item.formatting || 'toInt'}
              error={item.error || ''}
            />
          </div>
          <div className="flex-item">
            <Input
              handleChange={handleParamIntervationChange}
              value={item.intervention_day}
              placeholder="Intervention Day"
              fieldKey={item.id}
              text="text"
              key={item.id}
              id={item.id}
              index={index}
              formatting="toInt"
              error={item.error || ''}
            />
          </div>
        </div>
      ))}
    <style jsx="true" global="true">
      {`
        .cloning-element {
          display: flex;
          padding: 35px 0 15px;
        }
        .flex-item {
          width: 33%;
        }
      `}
    </style>
  </div>
);

export default Params;
