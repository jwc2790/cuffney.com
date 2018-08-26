import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header } from 'semantic-ui-react';
import ResponsiveContainer from '../../components/ResponsiveContainer';
import getPage from '../../actions/page/action';
import MastheadSection from '../../components/MastheadSection';

export class Home extends PureComponent {
  componentWillMount() {
    const { getPageBySlug } = this.props;
    getPageBySlug('/');
  }

  static renderSections(sections) {
    return sections.map((section) => {
      const { id, name } = section;
      switch (name) {
        case 'heading':
          return <MastheadSection {...section} />;
        case 'footer':
          return <Header key={id}>Footer</Header>;
        default:
          return null;
      }
    });
  }

  render() {
    const { sections } = this.props;
    return (
      <ResponsiveContainer>
        <Header>Home</Header>
        { Home.renderSections(sections) }
      </ResponsiveContainer>
    );
  }
}


Home.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object),
  getPageBySlug: PropTypes.func,
};

Home.defaultProps = {
  sections: [],
  getPageBySlug: () => [],
};

const mapStateToProps = state => ({ sections: state.page.sections });

const mapDispatchToProps = dispatch => ({
  getPageBySlug: () => dispatch(getPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
