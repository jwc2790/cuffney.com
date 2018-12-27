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
      <a className="download" href="https://resume.cuffney.com/resume.md" download>Download PDF</a>
      <div className="content">
        <iframe
          src="https://resume.cuffney.com"
          title="resume"
          frameBorder="0"
        />
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
