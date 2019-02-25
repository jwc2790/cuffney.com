import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'views/Home';
import Work from 'views/Work';
import Resume from 'views/Resume';
import NotFound from 'views/NotFound';
import Project from 'views/Project';

const App = () => (
  <Router>
    <Switch>
      <Route exact={ true } path="/" component={ Home } />
      <Route exact={ true } path="/work" component={ Work } />
      <Route path="/work/:slug" component={ Project } />
      <Route exact={ true } path="/resume" component={ Resume } />
      <Route path="*" component={ NotFound } />
    </Switch>
  </Router>
);

export default App;
