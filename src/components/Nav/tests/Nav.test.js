import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../index';

describe('Nav', () => {
  it('renders as expected', () => {
    shallow(<Nav active="/" />);
  });
});
