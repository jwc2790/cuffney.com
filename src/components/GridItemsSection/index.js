import React, {} from 'react';
import PropTypes from 'prop-types';
import { Segment, Grid, Image, Header } from 'semantic-ui-react';

const GridItemsSection = (props) => {
  const { items } = props;
  return (
    <Segment>
      <Grid>
        {items.map((item) => {
          const { src, title } = item;
          return (
            <Grid.Column width={16}>
              <Image src={src} />
              <Header as="h3">{ title }</Header>
            </Grid.Column>
          );
        })}
      </Grid>
    </Segment>
  );
};

GridItemsSection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
  })),
};

GridItemsSection.defaultProps = {
  items: PropTypes.arrayOf(PropTypes.shape({
    src: 'http://placehold.it/500x500',
    title: 'Example',
  })),
};

export default GridItemsSection;
