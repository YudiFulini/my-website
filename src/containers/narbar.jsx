import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PageLogo from './icons/page-icon.png';
import BookIcon from './icons/books-icon.png';
import ProfileIcon from './icons/profile-icon.png';
import EngineIcon from './icons/software-development.png';

import {Link} from 'react-router-dom'

const linkStyle = {
  textDecoration: "none",
  color: 'white',
};

const navbar = ()=>{
  return (
    <>
      <Navbar className="py-2 border-bottom border-light fixed-top"  bg="dark" expand="lg" variant="dark" >
        <Container fluid="lg">
          <Navbar.Brand className="d-flex align-items-center">
            <Link to="/" style={linkStyle}>
            <img src={PageLogo} width="30" height="30" className="d-inline-block align-top" />
            <p className="d-inline-flex font-8bit-navbar my-0 mx-3">Fuyuni</p>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav>
              <Nav.Link>
                <Link to="/"  style={linkStyle}>
                  <img src={ProfileIcon} width="23" height="23" className="d-inline-block align-top"/>
                  {' '} About Me
                </Link> 
              </Nav.Link>
              <Nav.Link>
                <Link to="/projects"  style={linkStyle}>
                  <img src={EngineIcon} width="23" height="23" className="d-inline-block align-top"/>
                  {' '} Projects 
                </Link>
              </Nav.Link>
              <Nav.Link > 
              <Link to="/studies"  style={linkStyle}>
                <img src={BookIcon} width="23" height="23" className="d-inline-block align-top"/>
                {' '} Studies
              </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default navbar