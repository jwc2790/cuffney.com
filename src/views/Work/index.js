import React from 'react';
import propTypes from 'prop-types';
import {
  Container,
  Grid,
  Card,
  Image,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import { projects } from './projects';
import './Work.css';

const isUrl = (str) => {
  const re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%+.~#?&//=]*)/;
  return re.test(str);
};

const renderProjectGrid = projs => projs.map((project) => {
  const {
    title,
    src,
    to,
    description,
    slug,
  } = project;
  let linkComponent = null;
  let linkTarget = null;
  if (to && isUrl(to)) {
    linkComponent = 'a';
    linkTarget = '_blank';
  } else if (to && !isUrl(to)) {
    linkComponent = Link;
  }

  return (
    <Grid.Column mobile={16} tablet={8} computer={4} key={slug}>
      <Card as={linkComponent} to={to} href={to} target={linkTarget}>
        <Image src={src} />
        <Card.Content>
          <Card.Header>{ title }</Card.Header>
          <Card.Description>{ description }</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
});

const Work = (props) => {
  const { location: { pathname } } = props;
  return (
    <div className="resume">
      <h1>Work.</h1>
      <Nav active={pathname} />
      <Container>
        <Grid stackable>
          { renderProjectGrid(projects)}
        </Grid>
      </Container>
    </div>
  );
};

Work.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string.isRequired,
  }).isRequired,
};

export default Work;
