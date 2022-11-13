import PropTypes from 'prop-types';
import '../stylesheets/cards.scss';
import { BsArrowRightCircle } from 'react-icons/bs';
import '../stylesheets/animate.scss';

function Cards({ country }) {
  return (
    <>
      <div className="card fade-in">
        <h1>{country.flag}</h1>
        <BsArrowRightCircle className="arrow" />
        <div className="card-body">
          <h4 className="card-title">{country.name.common}</h4>
          <h5 className="card-text">{country.capital}</h5>
        </div>
      </div>
    </>
  );
}

Cards.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.shape({
      common: PropTypes.string,
      official: PropTypes.string,
    }),
    capital: PropTypes.string,
    flag: PropTypes.string,
    flags: PropTypes.shape({
      svg: PropTypes.string,
    }),
  }).isRequired,
};

export default Cards;
