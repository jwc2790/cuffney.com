import React from 'react';
import { shallow } from 'enzyme';
import Project from './index';

describe('Work', () => {
  it('renders as expected', () => {
    shallow(<Project location={{ pathname: '/work/test' }} />);
  });
});
