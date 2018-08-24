import React, {} from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';
// import Header from '../Header';

const DesktopContainer = (props) => {
  const { children } = props;

  return (
    <Responsive minWidth={Responsive.onlyComputer.minWidth}>
      {/* <Header /> */}
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
