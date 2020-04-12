const inputConfig = [
  {
    fieldKey: 'pop',
    placeholder: 'Total population',
    formatting: 'toInt',
    defaultValue: '',
  },
  {
    fieldKey: 't0',
    placeholder: 'offset',
    formatting: 'toInt',
    defaultValue: '',
  },
  {
    fieldKey: 'no_of_age_groups',
    placeholder: 'No of age groups',
    formatting: 'toInt',
  },
  {
    fieldKey: 'D_incubation',
    placeholder: 'Length of Incubation period',
    formatting: 'toFloat',
  },
  {
    fieldKey: 'D_infectious',
    placeholder: 'Duration patient is infectious',
    formatting: 'toFloat',
  },
  {
    fieldKey: 'S0',
    placeholder: 'S0',
    formatting: 'toFloat',
  },
  {
    fieldKey: 'I0',
    placeholder: 'Number of infections actively circulating',
    formatting: 'toInt',
  },
  {
    fieldKey: 'R0',
    placeholder: 'Population no longer infectious',
    formatting: 'toInt',
  },
  {
    fieldKey: 'E0',
    placeholder: 'Number of infections actively circulating',
    formatting: 'toInt',
  },
  {
    fieldKey: 'rate_frac',
    placeholder: 'rate_frac',
    formatting: 'toArray-toInt',
  },
  {
    fieldKey: 'delI',
    placeholder: 'delI',
    formatting: 'toInt',
  },
  {
    fieldKey: 'delR',
    placeholder: 'delR',
    formatting: 'toInt',
  },
  {
    fieldKey: 'delS',
    placeholder: 'delS',
    formatting: 'toInt',
  },
  {
    fieldKey: 'delE',
    placeholder: 'delE',
    formatting: 'toInt',
  },
  {
    fieldKey: 'Mild0',
    placeholder: 'Mild0',
    formatting: 'toInt',
  },
  {
    fieldKey: 'Severe0',
    placeholder: 'Severe0',
    formatting: 'toInt',
  },
  {
    fieldKey: 'Severe_H0',
    placeholder: 'Severe_H0',
    formatting: 'toInt',
  },
  {
    fieldKey: 'Fatal0',
    placeholder: 'Fatal0',
    formatting: 'toInt',
  },
  {
    fieldKey: 'R_Mild0',
    placeholder: 'R_Mild0',
    formatting: 'toInt',
  },
  {
    fieldKey: 'R_Severe0',
    placeholder: 'R_Severe0',
    formatting: 'toInt',
  },
  {
    fieldKey: 'R_Fatal0',
    placeholder: 'R_Fatal0',
    formatting: 'toInt',
  },
  {
    fieldKey: 'D_death',
    placeholder: 'D_death',
    formatting: 'toInt',
  },
  {
    fieldKey: 'D_hospital_lag',
    placeholder: 'D_hospital_lag',
    formatting: 'toInt',
  },
  {
    fieldKey: 'D_recovery_severe',
    placeholder: 'D_recovery_severe',
    formatting: 'toFloat',
  },
  {
    fieldKey: 'D_recovery_mild',
    placeholder: 'D_recovery_mild',
    formatting: 'toFloat',
  },
  {
    fieldKey: 'pop_frac',
    placeholder: 'pop_frac',
    formatting: 'toArray-toFloat',
  },
  {
    fieldKey: 'CFR',
    placeholder: 'CFR',
    formatting: 'toArray-toFloat',
  },
  {
    fieldKey: 'P_SEVERE',
    placeholder: 'P_SEVERE',
    formatting: 'toArray-toFloat',
  },
  {
    fieldKey: 'r1',
    placeholder: 'r1',
    formatting: 'toFloat',
  },
  {
    fieldKey: 'r2',
    placeholder: 'r2',
    formatting: 'toFloat',
  },
  {
    fieldKey: 'r3',
    placeholder: 'r3',
    formatting: 'toFloat',
  },
  {
    fieldKey: 'r4',
    placeholder: 'r4',
    formatting: 'toFloat',
  },
];

const globalConfig = [
  {
    fieldKey: 'pop_frac',
    placeholder: 'Population frac of different age groups',
    formatting: 'toArray-toFloat',
  },
  {
    fieldKey: 'rate_frac',
    placeholder: 'Rate multiplier',
    formatting: 'toArray-toInt',
  },
  {
    fieldKey: 'CFR',
    placeholder: 'Case Fatality rate by age groups',
    formatting: 'toArray-toFloat',
  },
  {
    fieldKey: 'P_SEVERE',
    placeholder: 'Hospitalization rate by age groups',
    formatting: 'toArray-toFloat',
  },
  {
    fieldKey: 'I0',
    placeholder: 'Number of infections actively circulating',
    formatting: 'toInt',
  },
  {
    fieldKey: 'E0',
    placeholder: 'Number of infections actively circulating',
    formatting: 'toInt',
  },
];

const nodeParamConfig = [
  {
    fieldKey: 'node',
    placeholder: 'Select the state',
    formatting: '',
    value: '',
  },
  {
    fieldKey: 'pop',
    placeholder: 'Total population',
    formatting: 'toInt',
    value: '',
  },
  {
    fieldKey: 't0',
    placeholder: 'offset',
    formatting: 'toInt',
    value: '',
  },
  {
    fieldKey: 'pop_frac',
    placeholder: 'pop_frac',
    formatting: 'toArray-toFloat',
    value: '',
  },
];

const paramConfig = {
  label: 'Params',
  fieldKey: 'nodal_param_change',
  paramKeys: [
    'rates',
    'delI',
    'delS',
    'delR',
    'delE',
    'D_incubation',
    'D_infectious',
    'rate_frac',
    'Mild0',
    'Severe0',
    'Severe_H0',
    'Fatal0',
    'R_Mild0',
    'R_Severe0',
    'R_Fatal0',
    'D_death',
    'P_SEVERE',
    'CFR',
    'D_hospital_lag',
    'D_recovery_severe',
    'D_recovery_mild',
  ],
};

const states = [
  {
    id: 'Andaman and Nicobar Islands',
    Latitude: 11.6670256,
    Longitude: 92.73598262,
  },
  {
    id: 'Andhra Pradesh',
    Latitude: 14.7504291,
    Longitude: 78.57002559,
  },
  {
    id: 'Arunachal Pradesh',
    Latitude: 27.1003988,
    Longitude: 93.61660071,
  },
  {
    id: 'Assam',
    Latitude: 26.7499809,
    Longitude: 94.21666744,
  },
  {
    id: 'Bihar',
    Latitude: 25.7854145,
    Longitude: 87.4799727,
  },
  {
    id: 'Chandigarh',
    Latitude: 30.719997,
    Longitude: 76.78000565,
  },
  {
    id: 'Chhattisgarh',
    Latitude: 22.0904204,
    Longitude: 82.15998734,
  },
  {
    id: 'Dadra And Nagar Haveli',
    Latitude: 20.2665782,
    Longitude: 73.0166178,
  },
  {
    id: 'Delhi',
    Latitude: 28.6699929,
    Longitude: 77.23000403,
  },
  {
    id: 'Goa',
    Latitude: 15.491997,
    Longitude: 73.81800065,
  },
  {
    id: 'Haryana',
    Latitude: 28.4500063,
    Longitude: 77.01999101,
  },
  {
    id: 'Himachal Pradesh',
    Latitude: 31.1000255,
    Longitude: 77.16659704,
  },
  {
    id: 'Jammu and Kashmir',
    Latitude: 34.2999593,
    Longitude: 74.46665849,
  },
  {
    id: 'Jharkhand',
    Latitude: 23.8003935,
    Longitude: 86.41998572,
  },
  {
    id: 'Karnataka',
    Latitude: 12.5703813,
    Longitude: 76.91999711,
  },
  {
    id: 'Kerala',
    Latitude: 8.9003727,
    Longitude: 76.56999263,
  },
  {
    id: 'Lakshadweep',
    Latitude: 10.5625733,
    Longitude: 72.63686717,
  },
  {
    id: 'Madhya Pradesh',
    Latitude: 21.3003911,
    Longitude: 76.13001949,
  },
  {
    id: 'Maharashtra',
    Latitude: 19.250232,
    Longitude: 73.16017493,
  },
  {
    id: 'Manipur',
    Latitude: 24.7999707,
    Longitude: 93.95001705,
  },
  {
    id: 'Meghalaya',
    Latitude: 25.5704922,
    Longitude: 91.8800142,
  },
  {
    id: 'Mizoram',
    Latitude: 23.710399,
    Longitude: 92.72001461,
  },
  {
    id: 'Nagaland',
    Latitude: 25.6669979,
    Longitude: 94.11657019,
  },
  {
    id: 'Odisha',
    Latitude: 19.8204297,
    Longitude: 85.90001746,
  },
  {
    id: 'Puducherry',
    Latitude: 11.9349937,
    Longitude: 79.83000037,
  },
  {
    id: 'Punjab',
    Latitude: 31.519974,
    Longitude: 75.98000281,
  },
  {
    id: 'Rajasthan',
    Latitude: 26.4499992,
    Longitude: 74.63998124,
  },
  {
    id: 'Sikkim',
    Latitude: 27.3333303,
    Longitude: 88.6166475,
  },
  {
    id: 'Tamil Nadu',
    Latitude: 12.9203858,
    Longitude: 79.15004187,
  },
  {
    id: 'Tripura',
    Latitude: 23.8354043,
    Longitude: 91.27999914,
  },
  {
    id: 'Uttar Pradesh',
    Latitude: 27.5999807,
    Longitude: 78.05000565,
  },
  {
    id: 'Uttarakhand',
    Latitude: 30.320409,
    Longitude: 78.05000565,
  },
  {
    id: 'West Bengal',
    Latitude: 22.5803904,
    Longitude: 88.32994665,
  },
  {
    id: 'Gujarat',
    Latitude: 22.2587,
    Longitude: 71.1924,
  },
  {
    id: 'Ladakh',
    Latitude: 34.152588,
    Longitude: 77.577049,
  },
  {
    id: 'Telangana',
    Latitude: 18.1124,
    Longitude: 79.0193,
  },
];

export { inputConfig, paramConfig, globalConfig, states, nodeParamConfig };
