import HomeBanner from '../../components/HomeBanner/HomeBanner';
import './Home.css';

const Home = () => {
  return (
    <>
      <HomeBanner />
      <div className="container my-4">
        <h1 className="text-center">Welcome to Brew & Muse Café!</h1>
        <p className="text-center mt-3">The best coffee in town.</p>
      </div>
      <div className="container my-4">
        <h1 className="text-center">Welcome to Brew & Muse Café!</h1>
        <p className="text-center mt-3">The best coffee in town.</p>
      </div>
    </>
  );
};

export default Home;
