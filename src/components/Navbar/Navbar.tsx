import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

interface NavbarProps {
  brandName: string;
}

const CustomNavbar = ({ brandName }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const navbrStyle = {
    backgroundColor: location.pathname === '/' && !isScrolled ? 'transparent' : 'rgba(0, 0, 0, 0.8)',
    zIndex: 10,
    transition: 'background-color 0.3s ease',
  };

  return (
    <Navbar expand="lg" variant="light" className="position-absolute top-0 w-100" style={navbrStyle}>
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
