import React, { Component, } from "react";
import PropTypes from 'prop-types';
import GoogleAnalytics from "react-ga";

GoogleAnalytics.initialize("UA-0000000-0");

const withTracker = (WrappedComponent, options = {}) => {
    const trackPage = page => {
        GoogleAnalytics.set({
            page,
            ...options,
        });
        GoogleAnalytics.pageview(page);
    };

    const HOC = class extends Component {

        static propTypes = {
            location: PropTypes.shape({
                pathname: PropTypes.string,
                search: PropTypes.string,
            }), 
        }

        componentDidMount() {
            const { location: { pathname, search } } = this.props;
            trackPage(`${pathname}-${search}`);
        }

        componentDidUpdate(prevProps) {
            const { location: { pathname, search } } = this.props;
            const currentPage = `${prevProps.location.pathname}-${prevProps.location.search}`;
            const nextPage = `${pathname}-${search}`;

            if (currentPage !== nextPage) {
                trackPage(nextPage);
            }
        }

        render() {
            return <WrappedComponent { ...this.props } />;
        }
    };

    return HOC;
};

export default withTracker;