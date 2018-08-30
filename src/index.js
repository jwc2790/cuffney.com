// modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// local
import registerServiceWorker from './registerServiceWorker';
import store from './store';

// Components
import App from './views/App';

// global styles
import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
