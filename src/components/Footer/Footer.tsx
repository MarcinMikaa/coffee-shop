import { Container, Row, Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="fw-bold">Brew & Muse Café</h5>
            <Nav className="flex-column">
              <Nav.Link as={NavLink} to="/" className="text-white p-0">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/menu" className="text-white p-0">
                Menu
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="text-white p-0">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="text-white p-0">
                Contact
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="mb-1">Email: hello@coffeeshop.com</p>
            <p className="mb-1">Phone: +48 123 456 789</p>
          </Col>

          <Col md={4}>
            <h5 className="fw-bold">Follow Us</h5>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                Facebook
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                Instagram
              </a>
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">©2025 Brew & Muse Café. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
