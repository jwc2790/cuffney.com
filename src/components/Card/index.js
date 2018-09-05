import React from 'react';
import propTypes from 'prop-types';

import './Card.css';

const Card = (props) => {
  const {
    title,
    description,
    src,
    slug,
  } = props;
  return (
    <div className="card">
      <img src={src} alt={slug} />
      <div>
        <h3>{ title }</h3>
        <p>{ description }</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  slug: propTypes.string,
  src: propTypes.string,
  description: propTypes.string,
  title: propTypes.string,
};

Card.defaultProps = {
  slug: '',
  src: '',
  description: '',
  title: '',
};


export default Card;
