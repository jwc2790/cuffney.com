import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe('App', () => {
  // TODO: is there a better way to test react-router?
  it('renders as expected', () => {
    shallow(<App />);
  });
});
