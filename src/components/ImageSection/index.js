import React, {} from 'react';
import PropTypes from 'prop-types';
import { Segment, Image } from 'semantic-ui-react';

const ImageSection = (props) => {
  const { src } = props;
  return (
    <Segment style={{ padding: 0 }}>
      <Image src={src} fluid style={{ maxHeight: '450px' }} />
    </Segment>
  );
};

ImageSection.propTypes = {
  src: PropTypes.string,
};

ImageSection.defaultProps = {
  src: 'http://placehold.it/1600x450',
};

export default ImageSection;
