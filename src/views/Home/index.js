import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => (
  <div className="home_wrapper">
    <div className="home_flex-wrapper">
      <div className="home_flex-item">
        <img className="home_avatar" src="/imgs/avatar.jpg" alt="" />
        <h1 className="home_masthead">Joe Cuffney.</h1>
        <h3 className="home_subheader">Sr. Software Engineer.</h3>
        <hr className="home_hr" />
        <p className="home_nav">
          <Link className="home_nav-link" to="/resume">Resume.</Link>
          <Link className="home_nav-link" to="/work">Work.</Link>
        </p>
        <hr className="home_hr" />
      </div>
    </div>
  </div>
);

export default Home;
