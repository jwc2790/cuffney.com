import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Work from '../Work';
import About from '../About';
import Contact from '../Contact';
import NotFound from '../NotFound';

// const App = () => (
//   <h1>hello world</h1>
// );

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default App;
