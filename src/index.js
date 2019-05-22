// modules
import React from 'react';
import { render } from 'react-snapshot';

// Components
import App from 'views/App';

// local
import registerServiceWorker from './registerServiceWorker';

// global styles
import './index.css';

render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
