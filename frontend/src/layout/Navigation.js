import React from "react";
import {Link, withRouter} from 'react-router-dom'
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";

import { isAuthenticated, signout } from "../core/apiCore";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return {color: '#ff9900'}
  } else {
    return {color: '#ffffff'}
  }
}

const Navigation = ({history}) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container-fluid">
        <Navbar.Brand href="#home">VideoGame</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Link to="/" className="nav-link"  >Inicio</Link> */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          {/* <Link to="/signup" className="nav-link"  >SignUp</Link> */}
          <ul className="navbar-nav">
              {!isAuthenticated() && (
                <>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/signup">
                      Singup
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/signin">
                      Login
                    </Link>
                  </NavItem>
                </>
              )}
              { isAuthenticated() && (
                <>
                    <Link to="/" className="nav-link">Profile</Link>
                    <Link to="/addvideogame" className="nav-link">Add VideoGame</Link>
                    <Link to="/addcategory" className="nav-link">Add Category</Link>
             
                 {/* <NavItem className="nav-link">
                    <Link to="/addvideogame" className="nav-link">Add Videogame</Link>
                  </NavItem> */}
                  
                    <Link
                      to="/"
                      onClick={() =>
                        signout(() => {
                          history.push("/");
                        })} className="nav-link">
                      Logout
                    </Link>
                </>
              )}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default withRouter(Navigation);