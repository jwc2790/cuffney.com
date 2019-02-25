import React from 'react';
import propTypes from 'prop-types';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Nav from 'components/Nav';

import styles from './Home.module.css';

const linkProps = {
  className: styles.icon,
  target: '_blank',
  rel: 'noopener noreferrer',
};

const Home = (props) => {
  const { location: { pathname } } = props;

  return (

    <div className={styles.wrapper}>
      <div className={styles.flexWrapper}>
        <div className={styles.flexItem}>
          <img className={styles.avatar} src="/imgs/avatar.jpg" alt="Joe Cuffney" />
          <h1 className={styles.masthead}>Joe Cuffney.</h1>
          <h3 className={styles.subheader}>Sr. Software Engineer.</h3>
          <p className={styles.iconLinks}>
            <a href="https://www.linkedin.com/in/cuffney/" {...linkProps}>
              <FaLinkedin color="white" size="2em" />
            </a>
            <a href="https://github.com/jwc2790" {...linkProps}>
              <FaGithub color="white" size="2em" />
            </a>
          </p>
          <Nav active={ pathname } />
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
