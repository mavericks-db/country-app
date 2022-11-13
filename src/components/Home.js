import '../stylesheets/home.scss';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <div className="home-container">
      <h1 className="home-title">
        Every Country in the World
        <Link to="/countries">
          <button type="button" className="btn btn-light startBtn">
            Start Here &nbsp;
            <BsArrowRightCircle />
          </button>
        </Link>
      </h1>
    </div>
  </>
);

export default Home;
