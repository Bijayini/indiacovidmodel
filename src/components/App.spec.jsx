import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  let component;
  beforeEach(() => {
    component = render(<App />);
  });

  it('should match snapshot', () => {
    expect(component.container).toMatchSnapshot();
  });
});
