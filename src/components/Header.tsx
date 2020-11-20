import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">TodoZ</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/comments">Revoir les commentaires</Nav.Link>
      </Nav>
    </Navbar>
  );
}
