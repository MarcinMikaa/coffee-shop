import HomeBanner from '../../components/HomeBanner/HomeBanner';
import HistorySection from '../../components/HistorySection/HistorySection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HomeBanner />
      <div className="container my-4">
        <HistorySection />
        <h1 className="text-center">Welcome to Brew & Muse Café!</h1>
        <p className="text-center mt-3">The best coffee in town.</p>
      </div>
    </div>
  );
};

export default Home;
