// modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// local
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './views/App';
import NotFound from './views/NotFound';

// global styles
import './index.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/work" component={App} />
      <Route exact path="/blog" component={App} />
      <Route path="*" component={ NotFound } />
    </Switch>
  </Router>
), document.getElementById('root'));

registerServiceWorker();
