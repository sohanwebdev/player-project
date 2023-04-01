import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../public/player.avif';


const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="nav">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Item</Nav.Link>
              <Nav.Link href="#">View</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            <img style={{width: "80px", height: "80px", borderRadius: "50%"}} src={logo}/>
          </Navbar.Collapse>
        </Container>
      </Navbar>  
    );
};

export default Header;