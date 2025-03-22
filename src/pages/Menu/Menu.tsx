import { ReactNode, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import menuBanner from '../../assets/banner.jpg';
import './Menu.css';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuData {
  coffees: MenuItem[];
  cakes: MenuItem[];
  drinks: MenuItem[];
  snacks: MenuItem[];
}

const menuData: MenuData = {
  coffees: [
    { name: 'Espresso', description: 'Rich and bold single shot.', price: '8 PLN' },
    { name: 'Latte', description: 'Smooth espresso with steamed milk.', price: '12 PLN' },
    { name: 'Cappuccino', description: 'Espresso with frothy milk foam.', price: '11 PLN' },
    { name: 'Americano', description: 'Espresso diluted with hot water.', price: '9 PLN' },
    { name: 'Flat White', description: 'Double espresso with velvety milk.', price: '13 PLN' },
    { name: 'Mocha', description: 'Espresso with chocolate and steamed milk.', price: '14 PLN' },
  ],
  cakes: [
    { name: 'Cheesecake', description: 'Creamy classic with a biscuit base.', price: '14 PLN' },
    { name: 'Chocolate Cake', description: 'Decadent layers of chocolate.', price: '15 PLN' },
    { name: 'Carrot Cake', description: 'Moist cake with cream cheese frosting.', price: '13 PLN' },
    { name: 'Lemon Tart', description: 'Tangy lemon curd in a crisp pastry shell.', price: '12 PLN' },
    { name: 'Apple Pie', description: 'Warm spiced apples in flaky pastry.', price: '14 PLN' },
    { name: 'Red Velvet', description: 'Velvety cake with cream cheese icing.', price: '15 PLN' },
  ],
  drinks: [
    { name: 'Iced Tea', description: 'Refreshing lemon-infused tea.', price: '9 PLN' },
    { name: 'Hot Chocolate', description: 'Rich cocoa with whipped cream.', price: '10 PLN' },
    { name: 'Orange Juice', description: 'Freshly squeezed daily.', price: '8 PLN' },
    { name: 'Matcha Latte', description: 'Vibrant green tea with steamed milk.', price: '13 PLN' },
    { name: 'Chai Latte', description: 'Spiced tea with warm milk.', price: '12 PLN' },
    { name: 'Sparkling Water', description: 'Crisp and lightly carbonated.', price: '6 PLN' },
  ],
  snacks: [
    { name: 'Croissant', description: 'Buttery and flaky perfection.', price: '7 PLN' },
    { name: 'Muffin', description: 'Blueberry-filled delight.', price: '8 PLN' },
    { name: 'Sandwich', description: 'Ham and cheese on fresh bread.', price: '12 PLN' },
    { name: 'Bagel', description: 'Toasted with cream cheese spread.', price: '9 PLN' },
    { name: 'Pretzel', description: 'Soft, salty, and freshly baked.', price: '6 PLN' },
    { name: 'Scone', description: 'Served with jam and clotted cream.', price: '8 PLN' },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<keyof MenuData>('coffees');

  const renderMenuItems = (category: keyof MenuData): ReactNode[] => {
    return menuData[category].map((item, index) => (
      <Col xs={12} md={6} lg={4} key={index} className="mb-4">
        <Card className="menu-card">
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text className="menu-price">{item.price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ));
  };
  return (
    <div className="menu-page">
      <div className="menu-banner" style={{ backgroundImage: `url(${menuBanner})` }}>
        <div className="menu-overlay" />
        <h1 className="menu-title">Our Menu</h1>
      </div>

      <Container className="menu-content py-5">
        <Row className="mb-4 text-center">
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

        <Row>{renderMenuItems(activeCategory)}</Row>
      </Container>
    </div>
  );
};

export default Menu;
