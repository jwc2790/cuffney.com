import React from 'react';
import propTypes from 'prop-types';
import Nav from '../../components/Nav';

import './Home.css';

const Home = (props) => {
  const { location: { pathname } } = props;
  return (
    <div className="home_wrapper">
      <div className="home_flex-wrapper">
        <div className="home_flex-item">
          <img className="home_avatar" src="/imgs/avatar.jpg" alt="" />
          <h1 className="home_masthead">Joe Cuffney.</h1>
          <h3 className="home_subheader">Sr. Software Engineer.</h3>
          { false && <Nav active={pathname} /> }
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string.isRequired,
  }).isRequired,
};

export default Home;
