import React from 'react';
import propTypes from 'prop-types';
import Card from 'components/Card';
import Nav from 'components/Nav';

import styles from './Work.module.css';

import { projects } from './projects';

const Work = (props) => {
  const { location: { pathname } } = props;
  return (
    <div className={styles.wrapper}>
      <h1>Work.</h1>
      <Nav active={pathname} />
      <div className={styles.grid}>
        { projects.map(project => <Card {...project} key={project.slug} />) }
      </div>
    </div>
  );
};

Work.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string.isRequired,
  }).isRequired,
};

export default Work;
