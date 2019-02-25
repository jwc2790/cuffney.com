import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../index';

describe('Not Found', () => {
  it('renders as expected', () => {
    shallow(<NotFound />);
  });
});
