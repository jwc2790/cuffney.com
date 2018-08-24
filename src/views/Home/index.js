import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header } from 'semantic-ui-react';
import ResponsiveContainer from '../../components/ResponsiveContainer';
import getPage from '../../actions/page/action';

class Home extends PureComponent {
  componentWillMount() {
    const { getPageBySlug } = this.props;
    getPageBySlug('/');
  }

  render() {
    const { sections } = this.props;
    return (
      <ResponsiveContainer>
        <Header>Home</Header>
        {sections.map(() => <Header>Section</Header>)}
      </ResponsiveContainer>
    );
  }
}

const mapStateToProps = state => ({ ...state });

Home.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object),
  getPageBySlug: PropTypes.func,
};

Home.defaultProps = {
  sections: [],
  getPageBySlug: () => [],
};

const mapDispatchToProps = dispatch => ({
  getPageBySlug: () => dispatch(getPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
