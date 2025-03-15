import React from 'react';
import { Container } from 'react-bootstrap';
import bannerImage from '../../assets/banner.jpg';
import './Banner.css';

const Banner: React.FC = () => {
  return (
    <div className="home-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="home-overlay" />
      <Container className="banner-content">
        <h1>Welcome to Brew & Muse Café!</h1>
        <p className="lead">Enjoy the finest coffee in town.</p>
      </Container>
    </div>
  );
};

export default Banner;
