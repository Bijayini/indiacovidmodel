import React, { Component } from 'react';
import Input from '../ui-components/Input';
import Copy, { showCopyTooltip } from './Copy';
import { globalConfig, inputConfig, nodeParamConfig } from './config';
import color from '../theme';
import Params from './Params';
import Button from './Button';
import { formattingValue, getItemFromKey, getNodes, getParams } from '../utils';
import NodeParams from './NodeParams';

class CovidForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pop: '39600000',
      t0: '0',
      no_of_age_groups: '4',
      D_incubation: '5.2',
      D_infectious: '2.9',
      S0: '-1',
      I0: '50',
      R0: '0',
      E0: '100',
      rate_frac: '1, 1, 1, 1',
      delI: '0',
      delR: '0',
      delS: '0',
      delE: '0',
      Mild0: '0',
      Severe0: '0',
      Severe_H0: '0',
      Fatal0: '0',
      R_Mild0: '0',
      R_Severe0: '0',
      R_Fatal0: '0',
      D_death: '20',
      D_hospital_lag: '5',
      D_recovery_severe: '28.6',
      D_recovery_mild: '11.1',
      pop_frac: '0.44,0.35,0.15,0.06',
      CFR: '0.003, 0.03 , 0.12 , 0.24',
      P_SEVERE: '0.05,  0.15, 0.30, 0.75',
      r1: '3.0',
      r2: '2.4',
      r3: '1.2',
      r4: '0.6',
      params: [],
      no_of_node: '',
      nodes: [],
      payload: {},
    };
  }

  addNodeParam = nodeIndex => {
    const newNodes = [...this.state.nodes];
    newNodes[nodeIndex] = {
      ...newNodes[nodeIndex],
      params: [
        ...newNodes[nodeIndex].params,
        {
          field: 'Select',
          value: '',
          id: nodeIndex + 90,
          error: '',
          formatting: 'toInt',
          intervention_day: '',
        },
      ],
    };
    this.setState({
      nodes: [...newNodes],
      payload: {},
    });
  };

  generateJson = () => {
    const {
      pop,
      t0,
      no_of_age_groups,
      D_incubation,
      D_infectious,
      S0,
      I0,
      R0,
      E0,
      rate_frac,
      delI,
      delR,
      delS,
      delE,
      Mild0,
      Severe0,
      Severe_H0,
      Fatal0,
      R_Mild0,
      R_Severe0,
      R_Fatal0,
      D_death,
      D_hospital_lag,
      D_recovery_severe,
      D_recovery_mild,
      pop_frac,
      CFR,
      P_SEVERE,
      r1,
      r2,
      r3,
      params,
      nodes,
    } = this.state;

    this.setState({
      payload: {
        pop: formattingValue(
          pop,
          getItemFromKey('pop', inputConfig).formatting,
        ),
        t0: formattingValue(t0, getItemFromKey('t0', inputConfig).formatting),
        no_of_age_groups: formattingValue(
          no_of_age_groups,
          getItemFromKey('no_of_age_groups', inputConfig).formatting,
        ),
        D_incubation: formattingValue(
          D_incubation,
          getItemFromKey('D_incubation', inputConfig).formatting,
        ),
        D_infectious: formattingValue(
          D_infectious,
          getItemFromKey('D_infectious', inputConfig).formatting,
        ),
        S0: formattingValue(S0, getItemFromKey('S0', inputConfig).formatting),
        I0: formattingValue(I0, getItemFromKey('I0', inputConfig).formatting),
        R0: formattingValue(R0, getItemFromKey('R0', inputConfig).formatting),
        E0: formattingValue(E0, getItemFromKey('E0', inputConfig).formatting),
        rate_frac: formattingValue(
          rate_frac,
          getItemFromKey('rate_frac', inputConfig).formatting,
        ),
        delI: formattingValue(
          delI,
          getItemFromKey('delI', inputConfig).formatting,
        ),
        delR: formattingValue(
          delR,
          getItemFromKey('delR', inputConfig).formatting,
        ),
        delS: formattingValue(
          delS,
          getItemFromKey('delS', inputConfig).formatting,
        ),
        delE: formattingValue(
          delE,
          getItemFromKey('delE', inputConfig).formatting,
        ),
        Mild0: formattingValue(
          Mild0,
          getItemFromKey('Mild0', inputConfig).formatting,
        ),
        Severe0: formattingValue(
          Severe0,
          getItemFromKey('Severe0', inputConfig).formatting,
        ),
        Severe_H0: formattingValue(
          Severe_H0,
          getItemFromKey('Severe_H0', inputConfig).formatting,
        ),
        Fatal0: formattingValue(
          Fatal0,
          getItemFromKey('Fatal0', inputConfig).formatting,
        ),
        R_Mild0: formattingValue(
          R_Mild0,
          getItemFromKey('R_Mild0', inputConfig).formatting,
        ),
        R_Severe0: formattingValue(
          R_Severe0,
          getItemFromKey('R_Severe0', inputConfig).formatting,
        ),
        R_Fatal0: formattingValue(
          R_Fatal0,
          getItemFromKey('R_Fatal0', inputConfig).formatting,
        ),
        D_death: formattingValue(
          D_death,
          getItemFromKey('D_death', inputConfig).formatting,
        ),
        D_hospital_lag: formattingValue(
          D_hospital_lag,
          getItemFromKey('D_recovery_severe', inputConfig).formatting,
        ),
        D_recovery_severe: formattingValue(
          D_recovery_severe,
          getItemFromKey('D_recovery_severe', inputConfig).formatting,
        ),
        D_recovery_mild: formattingValue(
          D_recovery_mild,
          getItemFromKey('D_recovery_mild', inputConfig).formatting,
        ),
        pop_frac: formattingValue(
          pop_frac,
          getItemFromKey('pop_frac', inputConfig).formatting,
        ),
        CFR: formattingValue(
          CFR,
          getItemFromKey('CFR', inputConfig).formatting,
        ),
        P_SEVERE: formattingValue(
          P_SEVERE,
          getItemFromKey('P_SEVERE', inputConfig).formatting,
        ),
        r1: formattingValue(r1, getItemFromKey('r1', inputConfig).formatting),
        r2: formattingValue(r2, getItemFromKey('r2', inputConfig).formatting),
        r3: formattingValue(r3, getItemFromKey('r3', inputConfig).formatting),
        params: getParams(params),
        nodes: getNodes(nodes),
      },
    });
  };

  addNode = (key, value) => {
    let newNodes = [];
    for (let i = 0; i < parseInt(value); i++) {
      newNodes = [
        ...newNodes,
        { node: '', pop: '', t0: '', pop_frac: '', params: [] },
      ];
    }
    this.setState(prevState => ({
      nodes: [...newNodes],
      no_of_node: value,
      payload: {},
    }));
  };

  updateNodeValue = (fieldKey, value, nodeIndex) => {
    const newNodes = [...this.state.nodes];
    newNodes[nodeIndex] = { ...newNodes[nodeIndex], [fieldKey]: value };
    this.setState({
      nodes: [...newNodes],
      payload: {},
    });
  };

  updateNodeParams = (value, id, nodeIndex) => {
    const { nodes } = this.state;
    const index = nodes[nodeIndex].params.findIndex(item => item.id === id);
    const findItem = inputConfig.find(item => item.fieldKey === value);
    const newNodes = [...this.state.nodes];
    if (!nodes[nodeIndex].params[index].error) {
      newNodes[nodeIndex].params[index].field = value;
      newNodes[nodeIndex].params[index].formatting =
        (findItem && findItem.formatting) || '';
    } else if (nodes[nodeIndex].params[index].error) {
      newNodes[nodeIndex].params[index].error = '';
    }
    this.setState({
      nodes: [...newNodes],
      payload: {},
    });
  };

  updateNodeParamValue = (id, value, nodeIndex) => {
    const { nodes } = this.state;
    const index = nodes[nodeIndex].params.findIndex(item => item.id === id);
    const newNodes = [...this.state.nodes];
    newNodes[nodeIndex].params[index].value = value;
    this.setState({
      nodes: [...newNodes],
      payload: {},
    });
  };

  updateNodeParamIntervationValue = (id, value, nodeIndex) => {
    const { nodes } = this.state;
    const index = nodes[nodeIndex].params.findIndex(item => item.id === id);
    const newNodes = [...this.state.nodes];
    newNodes[nodeIndex].params[index].intervention_day = value;
    this.setState({
      nodes: [...newNodes],
    });
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value,
      payload: {},
    });
  };

  addParam = () => {
    this.setState(prevState => ({
      params: [
        ...prevState.params,
        {
          field: 'Select',
          value: '',
          id: prevState.params.length + 5,
          error: '',
          formatting: 'toInt',
          intervention_day: '',
        },
      ],
      payload: {},
    }));
  };

  updateParamValue = (items, index) => {
    const newParams = [...this.state.params];
    newParams[index] = { ...newParams[index], ...items };

    this.setState({
      params: [...newParams],
      payload: {},
    });
  };

  handleParamValueChange = (id, value) => {
    const itemIndex = this.state.params.findIndex(item => item.id === id);
    this.updateParamValue({ value }, itemIndex);
  };

  handleParamIntervationChange = (id, intervention_day) => {
    const itemIndex = this.state.params.findIndex(item => item.id === id);
    this.updateParamValue({ intervention_day }, itemIndex);
  };

  handleChangeParam = (value, id) => {
    const { params } = this.state;
    const index = params.findIndex(item => item.id === id);
    const findItem = inputConfig.find(item => item.fieldKey === value);
    this.updateParamValue(
      {
        field: value,
        formatting: (findItem && findItem.formatting) || '',
      },
      index,
    );
  };

  copyConfigToClipboard = async () => {
    const { payload } = this.state;
    // eslint-disable-next-line no-undef
    await navigator.clipboard.writeText(JSON.stringify(payload, undefined, 2));
    showCopyTooltip();
  };

  downloadJson = ()=>{
    const { payload } = this.state;

    const blob = new Blob([JSON.stringify(payload,undefined,2)],{type:'application/json'});
    let isIE = false || !!document.documentMode;
    if (isIE) {
      window.navigator.msSaveBlob(blob1, "payload.json");
    } else {
      let url = window.URL || window.webkitURL;
      let link = url.createObjectURL(blob);
      let a = document.createElement("a");
      a.download = "payload.json";
      a.href = link;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  render() {
    return (
      <div className="wrapper" style={{ margin: '0 20px' }}>
        <h1 style={{
          fontSize: '20px',
          paddingLeft: '20px',
        }}>Global Details</h1>
        <div className="form-wrap">
          {globalConfig.map(item => (
            <Input
              handleChange={this.handleChange}
              value={this.state[item.fieldKey]}
              placeholder={item.placeholder}
              fieldKey={item.fieldKey}
              text={item.type || 'text'}
              key={item.fieldKey}
              formatting={item.formatting}
            />
          ))}
          <Params
            params={this.state.params}
            addParam={this.addParam}
            handleChangeParam={this.handleChangeParam}
            handleParamValueChange={this.handleParamValueChange}
            handleParamIntervationChange={this.handleParamIntervationChange}
          />
          <div className="box">
            <h1 style={{
              fontSize: '20px',
            }}>Please add Node details</h1>
            <Input
              handleChange={this.addNode}
              value={this.state.no_of_node}
              placeholder="Please provide no of nodes"
              fieldKey="no_of_node"
              text="text"
              key="no_of_node"
              formatting="toInt"
            />
            <NodeParams
              nodes={this.state.nodes}
              onNodeChange={this.updateNodeValue}
              addNodeParam={this.addNodeParam}
              updateNodeParams={this.updateNodeParams}
              updateNodeParamValue={this.updateNodeParamValue}
              updateNodeParamIntervationValue={
                this.updateNodeParamIntervationValue
              }
            />
          </div>
        </div>
        <div className="right-wrapper">
          <Button handleChange={this.generateJson} label="Generate JSON" />
          <div className="json-structure">
            <textarea
              style={{
                minHeight: '400px',
                width: '100%',
                minWidth: '300px',
                marginBottom:'10px',
              }}
              placeholder="Fill the form to get JSON"
              value={JSON.stringify(this.state.payload, undefined, 2)}
            />
            <Copy onClick={this.copyConfigToClipboard} />
            <Button handleChange={this.downloadJson} disabled={!Object.keys(this.state.payload).length } label="Download JSON" />
            <p style={{fontSize:'13px', color:'red',fontStyle:'italic',marginTop:'5px'}}>(Please Generate JSON before Downloading)</p>
          </div>
        </div>
        <style jsx="true" global="true">
          {`
            .form-wrap {
              width: 58%;
              padding: 20px;
              float: left;
              position: relative;
              display:flex;
              flex-wrap: wrap;
            }
            .right-wrapper {
              width: calc( 42% - 80px);
              float: right;
              padding: 20px;
            }
            .json-structure {
              position: relative;
              margin: 20px 0 0;
            }
            .box {
              border-radius: 4px;
              box-shadow: 0 2px 7px 0 grey;
              background-color: white;
              padding:15px;
              width:100%;
              margin-bottom:20px;
            }
            .heading{
              font-size:15px;
              font-weight:bold;
              color:${color.grey}
              padding-bottom:10px;
            }
            .error {
               padding:0 0 10px;
               text-align:right;
               color:${color.warning};
               font-style:italic;
               font-size:11px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default CovidForm;
