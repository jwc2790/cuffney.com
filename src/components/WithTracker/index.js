import React, { Component } from "react";
import PropTypes from 'prop-types';
import GoogleAnalytics from "react-ga";

const { NODE_ENV } = process.env;
const TEST_ENV = 'test';
const isTest = () => NODE_ENV === TEST_ENV;

GoogleAnalytics.initialize("UA-0000000-0", { testMode: isTest() });

const withTracker = (WrappedComponent, options = {}) => {
    const trackPage = page => {
        GoogleAnalytics.set({
            page,
            ...options,
        });
        GoogleAnalytics.pageview(page);
    };

    class HOC extends Component {

        static propTypes = {
            location: PropTypes.objectOf({
                pathname: PropTypes.string,
                search: PropTypes.string,
            }),
        }

        componentDidMount() {
            const { location: { pathname, search } } = this.props;
            trackPage(`${pathname}-${search}`);
        }

        shouldComponentUpdate() {
            return true;
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
    }

    return HOC;
};

export default withTracker;