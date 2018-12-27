import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'views/Home';
import Work from 'views/Work';
import Resume from 'views/Resume';
import NotFound from 'views/NotFound';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/resume" component={Resume} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default App;
