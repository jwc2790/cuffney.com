import React from 'react';
import { shallow } from 'enzyme';
import Resume from '../index';

describe('Resume', () => {
  it('renders as expected', () => {
    shallow(<Resume location={{ pathname: '/resume' }} />);
  });
});
