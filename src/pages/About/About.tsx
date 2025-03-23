import { Container, Row, Col, Card } from 'react-bootstrap';
import aboutBanner from '../../assets/home-banner.jpg';
import teamMember1 from '../../assets/team1.png';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-banner" style={{ backgroundImage: `url(${aboutBanner})` }}>
        <div className="about-overlay" />
        <h1 className="about-title">About Coffee Shop</h1>
      </div>

      <Container className="about-content py-5">
        <Row className="mb-5 text-center intro-section">
          <Col>
            <h2 className="about-subtitle">Crafting Moments, One Cup at a Time</h2>
            <p className="lead">
              Welcome to Coffee Shop, where passion for coffee meets a warm, inviting atmosphere. Established in the
              heart of Warsaw, we've been brewing exceptional coffee since 2015, bringing together locals and travelers
              alike.
            </p>
          </Col>
        </Row>

        <div className="story-section">
          <Container>
            <Row className="py-5">
              <Col md={6} className="story-text">
                <h3 className="section-title">Our Story</h3>
                <p>
                  It all started with a simple idea: to share the joy of a perfectly brewed cup. Our founder, Anna
                  Kowalska, a coffee enthusiast with years of experience, opened Coffee Shop with a dream of blending
                  tradition with innovation. From sourcing the finest beans to perfecting every roast, we've grown into
                  a beloved spot where quality and community come first.
                </p>
              </Col>
              <Col md={6} className="d-flex align-items-center justify-content-center">
                <img src={aboutBanner} alt="Coffee Shop Interior" className="img-fluid rounded shadow-lg story-image" />
              </Col>
            </Row>
          </Container>
        </div>

        <Row className="mb-5 text-center values-section">
          <Col>
            <h3 className="section-title">What We Stand For</h3>
            <Row className="mt-4">
              <Col md={4} className="value-item">
                <p>
                  <strong>Quality</strong>
                </p>
                <p>We hand-pick beans from sustainable farms, ensuring every sip tells a story of craftsmanship.</p>
              </Col>
              <Col md={4} className="value-item">
                <p>
                  <strong>Community</strong>
                </p>
                <p>A gathering spot for friends, families, and dreamers - more than just a place for coffee.</p>
              </Col>
              <Col md={4} className="value-item">
                <p>
                  <strong>Passion</strong>
                </p>
                <p>Our baristas and bakers pour their heart into every cup and treat.</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-5 team-section">
          <Col>
            <h3 className="section-title text-center mb-4">Meet the Team</h3>
            <Row className="justify-content-center">
              <Col md={4} className="d-flex justify-content-center">
                <Card className="team-card">
                  <Card.Img variant="top" src={teamMember1} alt="Anna" />
                  <Card.Body>
                    <Card.Title>Anna Kowalska</Card.Title>
                    <Card.Text>
                      Founder & Coffee Master
                      <br />
                      She's the visionary who turned her love for coffee into a thriving community hub.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="d-flex justify-content-center">
                <Card className="team-card">
                  <Card.Img variant="top" src={teamMember1} alt="Piotr" />
                  <Card.Body>
                    <Card.Title>Piotr Nowak</Card.Title>
                    <Card.Text>
                      Head Barista
                      <br />
                      His expert hands craft every cup with precision and a dash of creativity.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="d-flex justify-content-center">
                <Card className="team-card">
                  <Card.Img variant="top" src={teamMember1} alt="Kasia" />
                  <Card.Body>
                    <Card.Title>Kasia Wiśniewska</Card.Title>
                    <Card.Text>
                      Pastry Chef
                      <br />
                      Her delicious creations make every coffee break a sweet delight.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="text-center cta-section">
          <Col>
            <h3 className="section-title">Join Us</h3>
            <p>
              Drop by to experience Coffee Shop for yourself. Find us at 123 Coffee St, Warsaw, or get in touch to learn
              more!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
