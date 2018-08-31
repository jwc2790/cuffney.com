import React from 'react';
// import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => (
  <Container fluid className="home_wrapper">
    <div className="home_flex-wrapper">
      <div className="home_flex-item">
        <img className="home_avatar" src="/imgs/avatar.jpg" alt="" />
        <h1 className="home_masthead">Joe Cuffney</h1>
        <h3 className="home_subheader">Sr. Software Engineer.</h3>
        {/* <Link className="home_nav-link" to="/work">See my Work.</Link> */}
      </div>
    </div>
  </Container>
);


Home.propTypes = {
};

Home.defaultProps = {
};

export default Home;
