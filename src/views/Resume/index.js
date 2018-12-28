import React from 'react';
import propTypes from 'prop-types';
import Nav from 'components/Nav';

import styles from './Resume.module.css';

const Resume = (props) => {
  const { location: { pathname } } = props;
  return (
    <div className={styles.wrapper}>
      <h1>Resume.</h1>
      <Nav active={pathname} />
      <a
        className={styles.download}
        href="https://resume.cuffney.com/resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        Download PDF
      </a>
      <div className={styles.content}>
        <iframe
          className={styles.iframe}
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
