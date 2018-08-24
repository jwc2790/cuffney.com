import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import {
  Segment, Container, Visibility, Menu, Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Header extends PureComponent {

  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { fixed } = this.state

    return (
      <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
        <Segment
          inverted
          textAlign="center"
          vertical
        >
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Menu.Item as={Link} to={'/'} active>Home</Menu.Item>
              <Menu.Item as={Link} to={'/work'}>Work</Menu.Item>
              <Menu.Item as={Link} to={'/contact'}>Contact</Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Visibility>
    );
  }
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
