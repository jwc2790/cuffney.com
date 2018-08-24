import React, {} from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';

const DesktopContainer = (props) => {
  const { children } = props;

  return (
    <Responsive minWidth={Responsive.onlyComputer.minWidth}>
      {children}
      <h1>desktop</h1>
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
