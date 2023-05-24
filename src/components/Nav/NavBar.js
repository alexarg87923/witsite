import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar className="ms-5" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="home.png"
            width="200"
            height="auto"
            className="d-inline-block align-top"
            alt="wit logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="d-flex justify-content-center w-100 mb-2 mb-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/about" className="mx-5 px-4 py-1 WiTRed">
              About
            </Nav.Link>
            <Nav.Link href="/contact" className="mx-5 px-4 py-1 WiTRed">
              Contact
            </Nav.Link>
            <Nav.Link href="/events" className="mx-5 px-4 py-1 WiTRed">
              Events
            </Nav.Link>
          </Nav>
          <Button
            className="me-5 px-5 mt-1 ms-5"
            variant="outline-success"
            href="https://sharknet.mdc.edu/organization/witmdc"
          >
            Join
          </Button>
        </Navbar.Collapse>
      </Container>
      <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    </Navbar>
  );
}

export default NavBar;
