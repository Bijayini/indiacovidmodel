import { inputConfig } from './components/config';

const formattingValue = (value, formatting) => {
  if (formatting === 'toInt') {
    return parseInt(value);
  }
  if (formatting === 'toFloat') {
    return parseFloat(value);
  }
  if (formatting === 'toArray-toFloat') {
    return value.split(',').map(item => parseFloat(item));
  }
  if (formatting === 'toArray-toInt') {
    return value.split(',').map(item => parseInt(item));
  }
  return value;
};

const getParams = (params, node = 'global') => {
  const newParam = [];
  params.forEach(item => {
    if (Boolean(item.value) && Boolean(item.intervention_day)) {
      newParam.push({
        [item.field]: parseInt(item.value),
        intervention_day: parseInt(item.intervention_day),
        intervention_type: node,
      });
    } else if (item.value) {
      newParam.push({
        [item.field]: parseInt(item.value),
      });
    }
  });
  return newParam;
};
const getItemFromKey = (itemKey, config) =>
  config.find(item => item.fieldKey === itemKey);

const getNodes = nodes => {
  const newNodes = [];
  nodes.forEach(node => {
    if (node.node) {
      newNodes.push({
        node: node.node,
        pop: node.pop
          ? formattingValue(
              node.pop,
              getItemFromKey('pop', inputConfig).formatting,
            )
          : 0,
        t0: node.t0
          ? formattingValue(
              node.t0,
              getItemFromKey('t0', inputConfig).formatting,
            )
          : 0,
        pop_frac: node.pop_frac
          ? formattingValue(
              node.pop_frac,
              getItemFromKey('pop_frac', inputConfig).formatting,
            )
          : [0.44, 0.35, 0.15, 0.06],
        params: getParams(node.params, node.node),
      });
    }
  });
  return newNodes;
};

export { getItemFromKey, formattingValue, getParams, getNodes };
