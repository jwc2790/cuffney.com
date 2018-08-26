import React, {} from 'react';
import PropTypes from 'prop-types';
import { Segment, Image, Header } from 'semantic-ui-react';

const MastheadSection = (props) => {
  const { header } = props;
  return (
    <Segment>
      <Image src="https://placehold.it/1600x400" fluid />
      <Header
        as="h1"
        style={{
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          margin: 0,
        }}
      >
        { header }
      </Header>
    </Segment>
  );
};

MastheadSection.propTypes = {
  header: PropTypes.string,
};

MastheadSection.defaultProps = {
  header: '',
};

export default MastheadSection;
