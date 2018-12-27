import React from 'react';
import propTypes from 'prop-types';
import Nav from '../../components/Nav';
import Card from '../../components/Card';
import { projects } from './projects';
import './Work.css';

const Work = (props) => {
  const { location: { pathname } } = props;
  return (
    <div className="work">
      <h1>Work.</h1>
      <Nav active={pathname} />
      <div className="grid">
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
