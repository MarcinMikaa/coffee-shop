import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

interface NavbarProps {
  brandName: string;
}

const CustomNavbar = ({ brandName }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="text-white">
          {brandName}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="custom-nav-link text-white">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/menu" className="custom-nav-link text-white">
              Menu
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="custom-nav-link text-white">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="custom-nav-link text-white">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
