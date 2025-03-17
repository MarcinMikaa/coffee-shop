import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import ContactBannerImage from '../../assets/contact-banner.jpg';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-banner" style={{ backgroundImage: `url(${ContactBannerImage})` }}>
        <div className="contact-overlay" />
        <h1 className="contact-title">Contact Us</h1>
      </div>

      <Container className="contact-content py-5">
        <Row className="">
          <Col md={6} className="mb-4 mb-md-0">
            <Row className="info-group">
              <Col xs={12} md={3} className="fw-bold">
                Address
              </Col>
              <Col xs={12} md={9}>
                123 Coffee St, Warsaw, Poland
              </Col>
            </Row>
            <Row className="info-group">
              <Col xs={12} md={3} className="fw-bold">
                Email
              </Col>
              <Col xs={12} md={9}>
                hello@coffeeshop.com
              </Col>
            </Row>
            <Row className="info-group">
              <Col xs={12} md={3} className="fw-bold">
                Phone
              </Col>
              <Col xs={12} md={9}>
                +48 123 456 789
              </Col>
            </Row>
            <Row className="info-group">
              <Col xs={12} md={3} className="fw-bold">
                Hours
              </Col>
              <Col xs={12} md={9}>
                Mon to Fri: 8:00 - 18:00
                <br />
                Sat: 9:00 - 15:00
                <br />
                Sun: Closed
              </Col>
            </Row>

            <Row className="contact-form">
              <Col xs={12}>
                <h3>Leave A Reply</h3>
                <Form>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" className="custom-input" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="E-mail" className="custom-input" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Message" className="custom-input" />
                  </Form.Group>

                  <Button variant="dark" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>

          <Col md={5} className="ms-auto">
            <div className="image-section" style={{ backgroundImage: `url(${ContactBannerImage})` }}></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.837!2d21.012228!3d52.229676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zNTLCsDEzJzQ2LjgiTiAyMcKwMDAnNDQuMCJF!5e0!3m2!1sen!2spl!4v1630000000000"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contact;
