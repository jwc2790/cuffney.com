import React, {} from 'react';
// import PropTypes from 'prop-types';
import {
  Segment, Container, Grid, List, Header,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Footer = () => (
  <Segment inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided inverted stackable columns={12}>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header inverted as="h4" content="Site" />
            <List link inverted>
              <List.Item as={Link} to="/">Home</List.Item>
              <List.Item as={Link} to="/work">Work</List.Item>
              <List.Item as={Link} to="/contact">Contact</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as="h4" content="Social" />
            <List link inverted>
              <List.Item as="a" href="https://github.com/jwc2790" target="_blank">Github</List.Item>
              <List.Item as="a" href="https://www.linkedin.com/in/cuffney/" target="_blank">Linkedin</List.Item>
              <List.Item as="a" href="https://www.facebook.com/joe.cuffney" target="_blank">Facebook</List.Item>
              <List.Item as="a" href="https://twitter.com/jcuffney" target="_blank">Twitter</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as="h4" inverted>
                Joe Cuffney
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
