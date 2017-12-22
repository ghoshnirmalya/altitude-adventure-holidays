import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import Link from 'gatsby-link';

import './styles.scss';

import BlackLogo from '../../assets/images/logo-black.png';

export default class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="container">
        <Navbar color="faded" light expand="md">
          <Link to="/" className="navbar-brand">
            <img src={BlackLogo} width="30" height="30" alt="" />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/blogs" className="nav-link">Blogs</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
