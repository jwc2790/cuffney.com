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
      <div className="content">
        <h1>Joe Cuffney.</h1>
        <h2>Education.</h2>
        <p>Rochester Institute of Technology.</p>
        <p>B.S, Computer Science.</p>
        <h2>Experience.</h2>
        <p>Nike.</p>
        <p>The Program PDX.</p>
      </div>
    </div>
  );
};

Resume.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string.isRequired,
  }).isRequired,
};


export default Resume;
