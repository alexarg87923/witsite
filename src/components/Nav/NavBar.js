import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'

function NavBar() {
  return (

<Navbar className="ms-5" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/" ><img
              src="home.png"
              width="200"
              height="auto"
              className="d-inline-block align-top"
              alt="wit logo"
            /></Navbar.Brand>
    
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="d-flex justify-content-center w-100 mb-2 mb-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/about" className="mx-5 px-4 py-1 WiTRed">About</Nav.Link>
        <Nav.Link href="/join" className="mx-5 px-4 py-1 WiTRed">Contact</Nav.Link>
        <Nav.Link href="/events" className="mx-5 px-4 py-1 WiTRed">Events</Nav.Link>
      </Nav>
      <Button className="me-5 px-3" variant="outline-success" href="/contact">Join</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>


  );
}



export default NavBar;
