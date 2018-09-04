import React from 'react';
import propTypes from 'prop-types';
import Nav from '../../components/Nav';

import './Resume.css';

const Resume = (props) => {
  const { location: { pathname } } = props;
  return (
    <div className="resume">
      <h1>Resume.</h1>
      <Nav active={pathname} />
    </div>
  );
};

Resume.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string.isRequired,
  }).isRequired,
};


export default Resume;
