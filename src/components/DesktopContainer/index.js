import React, {} from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';

const DesktopContainer = (props) => {
  const { children } = props;

  return (
    <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
      {children}
    </Responsive>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

DesktopContainer.defaultProps = {
  children: <div />,
};

export default DesktopContainer;
