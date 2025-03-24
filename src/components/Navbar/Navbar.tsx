import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

interface NavbarProps {
  brandName: string;
}

const CustomNavbar = ({ brandName }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

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
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand-name">
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

          <Nav className="ms-auto cafe-social-icons">
            <Nav.Link href="https://twitter.com" target="_blank">
              <i className="bi bi-twitter social-icon"></i>
            </Nav.Link>
            <Nav.Link href="https://facebook.com" target="_blank">
              <i className="bi bi-facebook social-icon"></i>
            </Nav.Link>
            <Nav.Link href="https://instagram.com" target="_blank">
              <i className="bi bi-instagram social-icon"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
