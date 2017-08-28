import React from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = props => (
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <a>BucketList</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight onSelect={props.handleSelect}>
      <NavDropdown eventKey={1} title="Account Settings" id="basic-nav-dropdown">
        <MenuItem eventKey={1.1}>Sign Out</MenuItem>
        <MenuItem eventKey={1.2}>Reset Password </MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

export default Header;
