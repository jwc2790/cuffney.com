import React from 'react';
import PropTypes from 'prop-types';
import DesktopContainer from '../DesktopContainer';
import MobileContainer from '../MobileContainer';
import StickyFooter from '../StickyFooter';

const ResponsiveContainer = ({ children }) => (
  <StickyFooter>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </StickyFooter>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

ResponsiveContainer.defaultProps = {
  children: <div />,
};

export default ResponsiveContainer;
