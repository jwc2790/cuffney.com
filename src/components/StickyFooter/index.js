import React, {} from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import './StickyFooter.css';

const StickyFooter = ({ children }) => (
  <div className="site">
    <div className="site-content">
      { children }
    </div>
    <Footer />
  </div>
);

StickyFooter.propTypes = {
  children: PropTypes.node,
};

StickyFooter.defaultProps = {
  children: <div />,
};

export default StickyFooter;
