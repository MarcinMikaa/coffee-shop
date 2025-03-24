import { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import contactBanner from '../../assets/contact-banner.jpg';
import Banner from '../../components/Banner/Banner';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="background-decor" />
      <Banner title="Get in Touch" backgroundImage={contactBanner} />

      <Container className="contact-content py-6">
        <Row className="g-5">
          <Col md={6} lg={6}>
            <h2 className="section-title mb-4">Contact Details</h2>
            <div className="contact-info">
              <div className="info-item">
                <i className="bi bi-geo-alt-fill me-3 icon"></i>
                <div>
                  <strong>Address</strong>
                  <p>123 Coffee St, Warsaw, Poland</p>
                </div>
              </div>
              <div className="info-item">
                <i className="bi bi-envelope-fill me-3 icon"></i>
                <div>
                  <strong>Email</strong>
                  <p>hello@coffeeshop.com</p>
                </div>
              </div>
              <div className="info-item">
                <i className="bi bi-telephone-fill me-3 icon"></i>
                <div>
                  <strong>Phone</strong>
                  <p>+48 123 456 789</p>
                </div>
              </div>
              <div className="info-item">
                <i className="bi bi-clock-fill me-3 icon"></i>
                <div>
                  <strong>Hours</strong>
                  <p>
                    Mon-Fri: 8:00 - 18:00
                    <br />
                    Sat: 9:00 - 15:00
                    <br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6} lg={6}>
            <h2 className="section-title mb-4">Send Us a Message</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="formName"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="custom-input"
                />
                <label htmlFor="formName">Full Name</label>
              </Form.Floating>

              <Form.Floating className="mb-3">
                <Form.Control
                  id="formEmail"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="custom-input"
                />
                <label htmlFor="formEmail">E-mail</label>
              </Form.Floating>

              <Form.Floating className="mb-3">
                <Form.Control
                  id="formMessage"
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="custom-input"
                  style={{ height: '60px' }}
                />
                <label htmlFor="formMessage">Message</label>
              </Form.Floating>
              <Button variant="dark" type="submit" className="submit-btn">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <h2 className="section-title mb-4 text-center">How to Find Us</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.837!2d21.012228!3d52.229676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zNTLCsDEzJzQ2LjgiTiAyMcKwMDAnNDQuMCJF!5e0!3m2!1sen!2spl!4v1630000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Cafe Location"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contact;
