import React from 'react';
import Nav from 'components/Nav';

import './NotFound.css';

const NotFound = () => (
  <div className="not-found">
    <h1>404. Not Found.</h1>
    <Nav active="not-found" />
  </div>
);

export default NotFound;
