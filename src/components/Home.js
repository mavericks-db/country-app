import '../stylesheets/home.scss';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const Home = () => (
  <>
    <div className="home-container">
      <h1 className="home-title">
        Every Country in the World
        <button type="button" className="btn btn-light startBtn">
          Start Here
          {' '}
          <BsArrowRightCircleFill />
        </button>
      </h1>
    </div>
  </>
);

export default Home;
