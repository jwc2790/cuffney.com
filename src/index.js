// modules
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from 'views/App';

// local
import registerServiceWorker from './registerServiceWorker';

// global styles
import './index.css';

ReactDOM.render((
  <App />
), document.getElementById('root'));

registerServiceWorker();
