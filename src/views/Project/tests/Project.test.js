import React from 'react';
import { shallow } from 'enzyme';
import Project from '../index';

describe('Work', () => {
  let match;
  beforeEach(() => {
    match = {
      params: { slug: 'slug' },
    };
  });

  it('renders as expected', () => {
    shallow(<Project location={{ pathname: '/work/test' }} match={ match } />);
  });
});
