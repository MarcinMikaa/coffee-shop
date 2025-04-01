import { Container, Row, Col } from 'react-bootstrap';
import historyImage from '../../assets/history.jpg';
import './HistorySection.css';

const HistorySection = () => {
  return (
    <section className="history-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} md={12} className="history-image-col">
            <div className="image-container">
              <div className="background-box"></div>
              <img src={historyImage} alt="Cozy Cafe Interior" className="history-image" />
            </div>
          </Col>
          <Col lg={7} md={12} className="history-text-col">
            <h2 className="history-title">Crafting Moments, One Cup at a Time</h2>
            <p className="history-text">
              <strong>Brew & Muse Café</strong> was founded in <strong>2015</strong> by <strong>Anna Kowalska</strong>,
              who dreamed of creating a place where coffee lovers could feel at home. Inspired by European café culture,
              she brought her passion to the <strong>heart of Warsaw</strong>. Since then, it has become a beloved spot
              for locals seeking a cozy retreat.
            </p>
            <p className="history-text">
              We source our beans from <strong>Brazil, Ethiopia, and Colombia</strong>, ensuring every cup is rich in
              flavor. Each bean is <strong>expertly roasted</strong> and brewed with care, delivering a perfect coffee
              experience. Our baristas are dedicated to making every sip a moment of pure delight.
            </p>
            <p className="history-text">
              Whether it's a <strong>morning espresso</strong>, a <strong>quiet afternoon</strong>, or a{' '}
              <strong>chat with friends</strong>, Brew & Muse Café is where moments are made, one cup at a time. Come
              and enjoy the warm atmosphere that makes every visit special.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HistorySection;
