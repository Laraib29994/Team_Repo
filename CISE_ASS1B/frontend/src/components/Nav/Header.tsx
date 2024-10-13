import React from 'react';
import NavBar from './NavBar';
import NavItem from './NavItem';
import NavDropdown from './NavDropdown';

const Header = () => {
  return (
    <NavBar>
      <NavItem route="http://localhost:3000">Home</NavItem>
      <NavItem dropdown>
        Articles
        <NavDropdown>
          <NavItem route="http://localhost:8082/api/articles">Create Articles</NavItem>
          <NavItem route="http://8082/api/Articles">Show Article List</NavItem>
        </NavDropdown>
      </NavItem>
    </NavBar>
  );
};

export default Header;
