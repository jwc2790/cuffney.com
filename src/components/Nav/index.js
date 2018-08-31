import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => (
  <div className="nav">
    <hr />
    <p>
      <Link to="/resume">Resume.</Link>
      <Link to="/work">Work.</Link>
    </p>
    <hr />
  </div>
);

export default Nav;
