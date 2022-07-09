import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PageLogo from './icons/page-icon.png';
import BookIcon from './icons/books-icon.png';
import ProfileIcon from './icons/profile-icon.png';
import EngineIcon from './icons/software-development.png';

const navbar = ()=>{
  return (
    <>
      <Navbar className="py-2 border-bottom border-light fixed-top" bg="dark" expand="lg" variant="dark" >
        <Container fluid="lg">
          <Navbar.Brand href="#home">
            <img src={PageLogo} width="30" height="30" className="d-inline-block align-top" />
            {' '} Fuyuni
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home"> <img src={ProfileIcon} width="23" height="23" className="d-inline-block align-top"/> {' '} About Me</Nav.Link>
              <Nav.Link href="#projects"> <img src={EngineIcon} width="23" height="23" className="d-inline-block align-top"/>Projects</Nav.Link>
              <Nav.Link href="#studies"> <img src={BookIcon} width="23" height="23" className="d-inline-block align-top"/>Studies</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default navbar