import React, {} from 'react';
import PropTypes from 'prop-types';
import { Segment, Image, Header } from 'semantic-ui-react';

const MastheadSection = (props) => {
  const { header, src } = props;
  return (
    <Segment style={{ padding: 0, margin: 0, maxHeight: '100vh' }}>
      <Image src={src} fluid />
      <Header
        as="h1"
        style={{
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          margin: 0,
          fontFamily: 'MontanaTypefaceRough',
          color: '#fff',
          fontSize: '8rem',
          letterSpacing: '10px',
        }}
      >
        { header }
      </Header>
    </Segment>
  );
};

MastheadSection.propTypes = {
  header: PropTypes.string,
  src: PropTypes.string,
};

MastheadSection.defaultProps = {
  header: 'Example Header',
  src: 'http://placehold.it/1600x900',
};

export default MastheadSection;
