import PropTypes from 'prop-types';

const CATEGORIES = ['ALL', 'Gainers', 'Losers'];

const CategoryFilter = ({ handleFilterChange }) => (
  <form className="form">
    <select onChange={handleFilterChange}>
      {
                CATEGORIES.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))
            }
    </select>
  </form>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
