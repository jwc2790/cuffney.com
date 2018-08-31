import React from 'react';
import propTypes from 'prop-types';
import Nav from '../../components/Nav';

import './Work.css';

const Work = (props) => {
  const { location: { pathname } } = props;
  return (
    <div className="resume">
      <h1>Work.</h1>
      <Nav active={pathname} />
    </div>
  );
};

Work.propTypes = {
  location: propTypes.string.isRequired,
};

export default Work;
