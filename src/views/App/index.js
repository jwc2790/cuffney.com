import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeView from '../Home';
import Work from '../Work';
import Contact from '../Contact';
import NotFound from '../NotFound';

import Footer from '../../components/Footer';

import './App.css';

const App = () => (
  <Router>
    <div className="site">
      <div className="site-content">
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
