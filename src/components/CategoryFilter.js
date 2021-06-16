import filterStock from '../actions/filter';
import store from '../store';

const CATEGORIES = ['ALL', 'Gainers', 'Losers'];

const CategoryFilter = () => {
  const handleFilterChange = (e) => {
    store.dispatch(filterStock(e.target.value));
  };
  return (
    <form className="form" data-testid="category-filter">
      Filter Stock:
      {' '}
      <select onChange={handleFilterChange} className="category-input">
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
};

export default CategoryFilter;
