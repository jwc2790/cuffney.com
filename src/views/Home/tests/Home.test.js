import React from 'react';
import { shallow } from 'enzyme';
import Home from '../index';

describe('Home', () => {
  it('renders as expected', () => {
    shallow(<Home location={{ pathname: '/' }} />);
  });
});
