import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Work from '../Work';
import NotFound from '../NotFound';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/work" component={Work} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default App;
