import React from 'react';
import { shallow } from 'enzyme';
import Work from './index';

describe('Work', () => {
  it('renders as expected', () => {
    shallow(<Work location={{ pathname: '/work' }} />);
  });
});
