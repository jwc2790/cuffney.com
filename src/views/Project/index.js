import React from 'react';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { projects } from 'projects';

import styles from './Project.module.css';

const Project = (props) => {
  const { match: { params: { slug } } } = props;
  const project = projects.find(proj => proj.slug === slug);
  if (!project) return <Redirect to="/not-found" />;
  const {
    title,
  } = project;
  return (
    <div className={ styles.wrapper }>
      <h1>
        <FaArrowLeft color="white" size="2rem" />
        { title }
        .
      </h1>
    </div>
  );
};

Project.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string.isRequired,
  }).isRequired,
  match: propTypes.shape({
    params: propTypes.shape({
      slug: propTypes.string,
    }),
  }).isRequired,
};

export default Project;
