import { Container, Row, Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={3} className="mb-3 mb-md-0">
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

          <Col md={3} className="mb-3 mb-md-0">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="mb-1">
              <strong>Email:</strong> hello@coffeeshop.com
            </p>
            <p className="mb-1">
              <strong>Phone:</strong> +48 123 456 789
            </p>
          </Col>

          <Col md={3} className="mb-3 mb-md-0">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="mb-1">
              <strong>Email:</strong> hello@coffeeshop.com
            </p>
            <p className="mb-1">
              <strong>Phone:</strong> +48 123 456 789
            </p>
          </Col>

          <Col md={3}>
            <h5 className="fw-bold">Follow Us</h5>
            <div className="social-links d-flex">
              <a href="#" className="twitter">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin"></i>
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
