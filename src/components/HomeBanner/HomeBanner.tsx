import { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import homeBanner from '../../assets/home-banner.jpg';
import './HomeBanner.css';

const Banner = () => {
  const [textIndex, setTextIndex] = useState(0);
  const navigate = useNavigate();

  const welcomeTexts = ['Crafted Coffee', 'Sweet Moments', 'Your Cozy Spot'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % welcomeTexts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [welcomeTexts.length]);

  const goToMenu = () => {
    navigate('/menu');
  };

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${homeBanner})` }}>
      <div className="hero-overlay" />
      <Container className="hero-content">
        <h1 className="hero-title">{welcomeTexts[textIndex]}</h1>
        <p className="hero-subtitle">Where every sip tells a story</p>
        <Button className="hero-btn" onClick={goToMenu}>
          Discover Menu
        </Button>
      </Container>
      <div className="scroll-down" onClick={scrollDown}>
        <i className="bi bi-arrow-down-short scroll-icon"></i>
      </div>
    </div>
  );
};

export default Banner;
