import { Container, Row, Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={3} className="mb-3 mb-md-0 footer-section">
            <i className="bi bi-telephone icon"></i>
            <div className="information-side">
              <h5 className="fw-bold">Contact Us</h5>
              <p className="mb-1">
                <strong>Email:</strong> hello@coffeeshop.com
              </p>
              <p className="mb-1">
                <strong>Phone:</strong> +48 123 456 789
              </p>
            </div>
          </Col>

          <Col md={3} className="mb-3 mb-md-0 footer-section">
            <i className="bi bi-geo-alt icon"></i>
            <div className="information-side">
              <h5 className="fw-bold">Address</h5>
              <p className="mb-1">123 Coffee St, Warsaw, Poland</p>
            </div>
          </Col>

          <Col md={3} className="mb-3 mb-md-0 footer-section">
            <i className="bi bi-clock icon"></i>
            <div className="information-side">
              <h5 className="fw-bold">Opening Hours</h5>
              <p className="mb-1">
                <strong>Mon to Fri:</strong> 8:00 - 18:00
              </p>
              <p className="mb-1">
                <strong>Sat:</strong> 9:00 - 15:00 Sun: Closed
              </p>
              <p className="mb-1">
                <strong>Sun:</strong> Closed
              </p>
            </div>
          </Col>

          <Col md={3}>
            <h5 className="fw-bold">Follow Us</h5>
            <div className="social-links">
              <a href="#" className="twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="text-center copyright">
            <p className="mb-0">©2025 Brew & Muse Café. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
