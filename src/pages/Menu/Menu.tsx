import { ReactNode, useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import menuBanner from '../../assets/home-banner.jpg';
import menuData from '../../data/menuData.json';
import './Menu.css';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuData {
  coffees: MenuItem[];
  cakes: MenuItem[];
  drinks: MenuItem[];
  snacks: MenuItem[];
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<keyof MenuData>('coffees');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderMenuItems = (category: keyof MenuData): ReactNode[] => {
    return menuData[category].map((item, index) => (
      <Col xs={12} md={6} lg={4} key={index} className="mb-5">
        <Card className="menu-card">
          <Card.Img variant="top" src={item.image} alt={item.name} className="menu-image" loading="lazy" />
          <Card.Body>
            <Card.Title className="menu-title">{item.name}</Card.Title>
            <Card.Text className="menu-description">{item.description}</Card.Text>
            <Card.Text className="menu-price">{item.price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <div className="menu-page">
      <div className="welcome-section" style={{ backgroundImage: `url(${menuBanner})` }}>
        <div className="welcome-overlay" />
        <div className="welcome-content" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
          <h1 className="welcome-title">Welcome to Cafe Delights</h1>
          <p className="welcome-subtitle">Indulge in the finest coffee and treats</p>
        </div>
      </div>

      <Container className="intro-section">
        <Row>
          <Col xs={12} md={4} className="intro-item">
            <i className="bi bi-cup-fill intro-icon"></i>
            <h3>Fresh Coffee</h3>
            <p>Locally roasted beans brewed to perfection.</p>
          </Col>
          <Col xs={12} md={4} className="intro-item">
            <i className="bi bi-cake-fill intro-icon"></i>
            <h3>Handmade Cakes</h3>
            <p>Baked daily with love and care.</p>
          </Col>
          <Col xs={12} md={4} className="intro-item">
            <i className="bi bi-house-heart-fill intro-icon"></i>
            <h3>Cozy Vibes</h3>
            <p>A warm escape in every visit.</p>
          </Col>
        </Row>
      </Container>

      <Container className="menu-content py-5">
        <Row className="text-center">
          <Col>
            <div className="menu-buttons">
              <Button
                className={`menu-btn ${activeCategory === 'coffees' ? 'active' : ''}`}
                onClick={() => setActiveCategory('coffees')}>
                Coffees
              </Button>
              <Button
                className={`menu-btn ${activeCategory === 'cakes' ? 'active' : ''}`}
                onClick={() => setActiveCategory('cakes')}>
                Cakes
              </Button>
              <Button
                className={`menu-btn ${activeCategory === 'drinks' ? 'active' : ''}`}
                onClick={() => setActiveCategory('drinks')}>
                Drinks
              </Button>
              <Button
                className={`menu-btn ${activeCategory === 'snacks' ? 'active' : ''}`}
                onClick={() => setActiveCategory('snacks')}>
                Snacks
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="gx-5">{renderMenuItems(activeCategory)}</Row>
      </Container>
    </div>
  );
};

export default Menu;
