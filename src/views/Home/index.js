import React from 'react';
import Nav from '../../components/Nav';

import './Home.css';

const Home = () => (
  <div className="home_wrapper">
    <div className="home_flex-wrapper">
      <div className="home_flex-item">
        <img className="home_avatar" src="/imgs/avatar.jpg" alt="" />
        <h1 className="home_masthead">Joe Cuffney.</h1>
        <h3 className="home_subheader">Sr. Software Engineer.</h3>
        <Nav />
      </div>
    </div>
  </div>
);

export default Home;
