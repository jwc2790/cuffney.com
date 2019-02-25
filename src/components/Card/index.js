import React from 'react';
import propTypes from 'prop-types';

const Card = (props) => {
  const {
    title,
    src,
    slug,
  } = props;
  return (
    <div className="card">
      <img src={src} alt={slug} />
      <div>
        <h3>{ title }</h3>
      </div>
    </div>
  );
};

Card.propTypes = {
  slug: propTypes.string,
  src: propTypes.string,
  title: propTypes.string,
};

Card.defaultProps = {
  slug: '',
  src: '',
  description: '',
  title: '',
};


export default Card;
