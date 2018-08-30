import React, {} from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

const TextSection = (props) => {
  const { text } = props;
  return (
    <Segment>
      <p>{text}</p>
    </Segment>
  );
};

TextSection.propTypes = {
  text: PropTypes.string,
};

TextSection.defaultProps = {
  text: '',
};

export default TextSection;
