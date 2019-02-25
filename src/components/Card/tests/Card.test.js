import React from 'react';
import { shallow } from 'enzyme';
import Card from '../index';

describe('Card', () => {
  it('renders as expected', () => {
    shallow(<Card />);
  });
});
