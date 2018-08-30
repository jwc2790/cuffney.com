import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { Header as SemanticHeader } from 'semantic-ui-react';
import Header from '../../components/Header';
import ResponsiveContainer from '../../components/ResponsiveContainer';
import getPage from '../../actions/page/action';
import MastheadSection from '../../components/MastheadSection';
import ImageSection from '../../components/ImageSection';
import TextSection from '../../components/TextSection';
import GridItemsSection from '../../components/GridItemsSection';

export class Home extends PureComponent {
  componentWillMount() {
    const { getPageBySlug } = this.props;
    getPageBySlug('/');
  }

  static renderSections(sections) {
    return sections.map((section) => {
      const { id, name } = section;
      switch (name) {
        case 'masthead':
          return <MastheadSection {...section} />;
        case 'text':
          return <TextSection key={id} {...section} />;
        case 'grid-items':
          return <GridItemsSection key={id} {...section} />;
        case 'image':
          return <ImageSection {...section} />;
        default:
          return null;
      }
    });
  }

  render() {
    const { sections } = this.props;
    return (
      <ResponsiveContainer>
        <Header />
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
