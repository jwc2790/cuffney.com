import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';

import { Home } from './index';

describe('Home Page', () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home store={store} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
