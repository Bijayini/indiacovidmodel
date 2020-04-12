import React from 'react';
import CovidForm from './CovidForm';
import color from '../theme';

const App = () => (
  <div>
    <header
      style={{
        color: `${color.white}`,
        background: `${color.primaryColor}`,
        fontSize: '15px',
        padding: '5px 30px',
        display: 'block',
      }}
    >
      <h1>India COVID-19 Model</h1>
    </header>
    <CovidForm />
  </div>
);

export default App;
