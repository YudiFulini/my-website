import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import PageLogo from './icons/page-icon.png';
import BookIcon from './icons/books-icon.png';
import ProfileIcon from './icons/profile-icon.png';
import EngineIcon from './icons/software-development.png';
import GlobeIcon from './icons/globe-icon.png';

import {Link} from 'react-router-dom'


const navLinks = [
  {
    id:1,
    linkTitle: 'About me',
    linkIcon: ProfileIcon,
    linkTo: '/'
  },
  {
    id:2,
    linkTitle: 'Projects',
    linkIcon: BookIcon,
    linkTo: '/projects'
  },
  {
    id:3,
    linkTitle: 'Information',
    linkIcon: GlobeIcon,
    linkTo: '/info'
  }
]

const linkTitleStyle = {
  textDecoration: "none",
  color: 'white',
};
const linkStyle = {
  textDecoration: "none",
  color: 'rgba(240, 240, 240, 0.8)'
};

const navbar = ()=>{
  return (
    <>
      <Navbar className="py-2 border-bottom border-light fixed-top"  bg="dark" expand="md" variant="dark" >
        <Container fluid="lg">
          <Navbar.Brand className="d-flex align-items-center">
            <Link to="/" style={linkTitleStyle}>
            <img src={PageLogo} width="30" height="30" className="d-inline-block align-top" />
            <p className="d-inline-flex font-8bit-navbar my-0 mx-3">Fuyuni</p>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav>
              {
                navLinks.map((link)=>{
                  return(
                    <Nav.Link key={link.id}>
                      <Link to={link.linkTo} className="d-flex justify-content-end" style={linkStyle}>
                        {link.linkTitle}
                        <img src={link.linkIcon} width="23" height="23" className="mx-1 d-inline-block align-top"/>
                      </Link> 
                    </Nav.Link>
                  )
                })
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default navbar