import PropTypes from 'prop-types';
import '../stylesheets/cards.scss';
import { BsArrowRightCircle } from 'react-icons/bs';
import '../stylesheets/animate.scss';
import { Link } from 'react-router-dom';

function Cards({ country }) {
  return (
    <>
      <Link to={`/details/${country.name.common}`}>
        <div className="card fade-in">
          <h1>{country.flag}</h1>
          <BsArrowRightCircle className="arrow" />
          <div className="card-body">
            <h4 className="card-title">{country.name.common}</h4>
            <h5 className="card-text">{country.capital}</h5>
          </div>
        </div>
      </Link>
    </>
  );
}

Cards.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.shape({
      common: PropTypes.string,
      official: PropTypes.string,
    }),
    capital: PropTypes.oneOfType([PropTypes.array]),
    flag: PropTypes.string,
    flags: PropTypes.shape({
      svg: PropTypes.string,
    }),
  }).isRequired,
};

export default Cards;
