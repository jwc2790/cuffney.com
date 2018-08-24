import React, {} from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';

const MobileContainer = (props) => {
  const { children } = props;

  return (
    <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
      {children}
    </Responsive>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node,
};

MobileContainer.defaultProps = {
  children: <div />,
};

export default MobileContainer;
