import React from 'react';
import { shallow } from 'enzyme';
// import withTracker from 'components/WithTracker';
import App from '../index';

describe('App', () => {

  beforeEach(() => {
    // mock the HOC withTracker
  })

  it('renders as expected', () => {
    shallow(<App />);
  })

  // TODO:
  // it('should call withTracker once for the defualt route', () => {})
});
