import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import withTracker from 'components/WithTracker';

import Home from 'views/Home';
import Work from 'views/Work';
import Resume from 'views/Resume';
import NotFound from 'views/NotFound';
import Project from 'views/Project';

const App = () => (
  <Router>
    <Switch>
      <Route exact={ true } path="/" component={ withTracker(Home) } />
      <Route exact={ true } path="/work" component={ withTracker(Work) } />
      <Route path="/work/:slug" component={ withTracker(Project) } />
      <Route exact={ true } path="/resume" component={ withTracker(Resume) } />
      <Route path="*" component={ NotFound } />
    </Switch>
  </Router>
);

export default App;
