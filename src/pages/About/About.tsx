import { Container, Row, Col, Card } from 'react-bootstrap';
import aboutBanner from '../../assets/home-banner.jpg';
import teamMember1 from '../../assets/team1.png';
import teamMember2 from '../../assets/team2.png';
import teamMember3 from '../../assets/team3.png';
import Banner from '../../components/Banner/Banner';
import HistorySection from '../../components/HistorySection/HistorySection';
import './About.css';

interface StaffMember {
  name: string;
  role: string;
  description: string;
  image: string;
  quote?: string;
}

const About = () => {
  const staff: StaffMember[] = [
    {
      name: 'Anna Kowalska',
      role: 'Barista & Founder',
      description: 'Anna`s expertise and vision ensure every cup of coffee is crafted with passion and care.',
      image: teamMember1,
      quote: '"Coffee is my passion and my dream come true, shared with everyone."',
    },

    {
      name: 'John Doe',
      role: 'Manager',
      description: 'John ensures our café runs seamlessly while creating a warm, welcoming atmosphere for everyone.',
      image: teamMember2,
      quote: '"A café thrives because of its people and the community around it."',
    },
    {
      name: 'Emily Brown',
      role: 'Pastry Chef',
      description: 'Emily crafts heavenly pastries daily, sharing her love of baking with every customer.',
      image: teamMember3,
      quote: '"Baking is my joy, and sharing it brings happiness to others."',
    },
  ];

  return (
    <div className="about-page">
      <Banner title="Our History" backgroundImage={aboutBanner} />

      <Container className="about-content py-5">
        <HistorySection />

        <div className="mb-5 text-center staff-section">
          <Row>
            <h3 className="staff-title text-center mb-3">Experienced & Professional Team</h3>
            <h6 className="staff-subtitle text-center mb-5">
              Our team brings passion and skill to every cup and every interaction, ensuring your visit is memorable and
              uplifting from start to finish.
            </h6>
          </Row>
          <Row>
            {staff.map((member, index) => (
              <Col key={index} lg={4} md={12} className="mb-5">
                <Card className="staff-card ">
                  <div className="staff-image-wrapper text-center">
                    <Card.Img variant="top" src={member.image} alt={member.name} />
                  </div>
                  <Card.Body className="staff-body">
                    <Card.Title className="staff-name">{member.name}</Card.Title>
                    <Card.Subtitle className="staff-role">{member.role}</Card.Subtitle>
                    <Card.Text className="staff-desc">{member.description}</Card.Text>
                    <Card.Text className="staff-quote">{member.quote}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
