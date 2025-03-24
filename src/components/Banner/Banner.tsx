import { Container } from 'react-bootstrap';
import './Banner.css';

interface BannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const Banner = ({ title, subtitle, backgroundImage }: BannerProps) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay" />
      <Container className="content">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </Container>
    </div>
  );
};

export default Banner;
