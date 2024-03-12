import { Container, Navbar, Nav, Image, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../auth/authentication.js';
import { Link as ScrollLink } from 'react-scroll';

export default function AppNavBar() {

  return (
    <Navbar expand="lg" className='px-1 px-md-2 px-lg-5'>
      <Container fluid className='px-2 px-md-4 px-lg-5'>
        <Navbar.Brand id="navbar-name" as={Link} to="/">JHUN SACAPAÑO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <ScrollLink className='ms-lg-3 navlink my-2 my-md-2 my-lg-0' to="hero" smooth={true} duration={500}>Home</ScrollLink>
            <ScrollLink className='ms-lg-3 navlink my-2 my-md-2 my-lg-0' to="about" smooth={true} duration={500}>About</ScrollLink>
            <ScrollLink className='ms-lg-3 navlink my-2 my-md-2 my-lg-0' to="experience" smooth={true} duration={500}>Experience</ScrollLink>
            <ScrollLink className='ms-lg-3 navlink my-2 my-md-2 my-lg-0' to="projects" smooth={true} duration={500}>Projects</ScrollLink>
            <ScrollLink className='ms-lg-3 navlink my-2 my-md-2 my-lg-0' to="contact" smooth={true} duration={500}>Contact</ScrollLink>
            <Nav.Link className='ms-lg-3 navlink' href="https://drive.google.com/file/d/1BicSl5cbsti8ziyfPhESkKT52NZB0ds4/view?usp=drive_link" 
            target="_blank" rel="noopener noreferrer">
              Resume
            </Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


// <Nav.Link className='ms-lg-3 navlink' as={NavLink} to="/" exact="true">Home</Nav.Link>