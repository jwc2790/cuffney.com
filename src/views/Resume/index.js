import React from 'react';
import propTypes from 'prop-types';
import Nav from '../../components/Nav';

import './Resume.css';

const Resume = (props) => {
  const { location: { pathname } } = props;
  return (
    <div className="resume">
      <base target="_blank" />

      <h1>Resume.</h1>
      <Nav active={pathname} />
      <div className="content">
        <iframe
          src="https://resume.cuffney.com"
          title="resume"
          frameBorder="0"
          id="resume"
          onLoad={() => {
            console.log('hi');
            const resume = document.getElementById('resume');
            console.log(resume);
            if (resume) {
              resume.height = '0px';
              resume.height = `${resume.contentWindow.document.body.scrollHeight}px`;
            }
          }}
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
