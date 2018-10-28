import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Navigation extends Component {

  state = {
    navIsOpen: false
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/">Electricals</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/">Groceries</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/">Basket</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  toggleNav = () => {
    this.setState({
      navIsOpen: !this.state.navIsOpen
    });
  }
}

export default Navigation;