import { Container, Navbar, Nav, Image, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../auth/authentication.js';

export default function AppNavBar() {
  const { userLoggedIn } = useAuth();

  return (
    <Navbar expand="lg" className='px-1 px-md-2 px-lg-5'>
      <Container fluid className='px-2 px-md-4 px-lg-5'>
        <Navbar.Brand id="navbar-name" as={Link} to="/">JHUN SACAPAÑO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='ms-lg-3 navlink' as={NavLink} to="/" exact="true">About</Nav.Link>
            <Nav.Link className='ms-lg-3 navlink' as={NavLink} to="/works" exact="true">Experience</Nav.Link>
            <Nav.Link className='ms-lg-3 navlink' as={NavLink} to="/contact" exact="true">Works</Nav.Link>
            <Nav.Link className='ms-lg-3 navlink' as={NavLink} to="/details" exact="true">Contact</Nav.Link>
            <Nav.Link className='ms-lg-3 navlink' as={NavLink} to="/resume" exact="true">Resume</Nav.Link>
 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}