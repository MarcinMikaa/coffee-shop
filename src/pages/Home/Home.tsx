import Banner from '../../components/Banner/Banner';
import './Home.css';

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container my-4">
        <h1 className="text-center">Welcome to Coffee Shop!</h1>
        <p className="text-center mt-3">The best coffee in town.</p>
      </div>
    </>
  );
};

export default Home;
