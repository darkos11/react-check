import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigateur = () => {
  return (
    
      <Navbar bg="Light" data-bs-theme="Light">
        <Container>
          <Navbar.Brand href="#home">Agence de voyage</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#features">Destinations</Nav.Link>
            <Nav.Link href="#pricing">Réservation</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      )
}

export default Navigateur
