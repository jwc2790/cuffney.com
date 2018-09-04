// modules
import React from 'react';
import ReactDOM from 'react-dom';

// local
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './views/App';

// global styles
import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render((
  <App />
), document.getElementById('root'));

registerServiceWorker();
