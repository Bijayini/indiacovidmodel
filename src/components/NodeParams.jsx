import React from 'react';
import {InputLabel, MenuItem, Select} from '@material-ui/core';
import Input from '../ui-components/Input';
import { states } from './config';
import InputForNode from './InputForNode';
import Params from './Params';

const NodeParams = ({
  nodes,
  onNodeChange,
  addNodeParam,
  updateNodeParams,
  updateNodeParamValue,
  updateNodeParamIntervationValue,
}) => (
  <div>
    {Boolean(nodes.length) &&
      nodes.map((items, nodeIndex) => (
        <div className="box">
          {Object.keys(items).map(item => {
            if (item === 'node') {
              return (
                <div>
                  <InputLabel id="demo-simple-select-helper-label">Name of the Node</InputLabel>
                  <Select
                    labelId="select-node"
                    id="select-node"
                    placeholder="Select Node"
                    value={nodes[nodeIndex][item] || 'Name of the Node'}
                    style={{
                      width: '100%',
                      padding: '4px 0',
                      background: '#fff',
                      marginBottom: '15px',
                    }}
                    onChange={e => onNodeChange(item, e.target.value, nodeIndex)}
                  >
                    {states.map(state => (
                      <MenuItem value={state.id}>{state.id}</MenuItem>
                    ))}
                  </Select>
                </div>

              );
            }
            if (item === 'params') {
              return (
                <Params
                  params={nodes[nodeIndex][item]}
                  index={nodeIndex}
                  addParam={addNodeParam}
                  handleChangeParam={updateNodeParams}
                  handleParamValueChange={updateNodeParamValue}
                  handleParamIntervationChange={updateNodeParamIntervationValue}
                />
              );
            }
            return (
              <InputForNode
                fieldKey={item}
                handleChange={onNodeChange}
                value={nodes[nodeIndex][item]}
                nodeIndex={nodeIndex}
              />
            );
          })}
        </div>
      ))}

    <style jsx="true" global="true">
      {`
        .flex-item {
          width: 50%;
        }
      `}
    </style>
  </div>
);

export default NodeParams;
