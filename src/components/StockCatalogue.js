import { connect } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getstock } from '../actions/index';
import StockItem from './StockItem';
import CategoryFilter from './CategoryFilter';
import filterStock from '../actions/filter';
import store from '../store';

const StockCatalogue = ({
  getStock, loading, stock, filter,
}) => {
  useEffect(() => {
    getStock();
  }, []);

  const handleFilterChange = (e) => {
    store.dispatch(filterStock(e.target.value));
  };

  if (loading) {
    return <p>Please wait...</p>;
  }

  const gainer = filter === 'Gainers' ? '+' : '-';
  let filteredStock = stock;

  if (filter !== 'ALL') {
    filteredStock = stock.filter((gain) => gain.changesPercentage.includes(gainer));
  }
  return (
    <div>
      <div className="header">
        <span className="logo">
          <i className="fas fa-poll" />
          STOCK MARKET
        </span>
        <CategoryFilter handleFilterChange={handleFilterChange} className="filter" />
      </div>
      <div className="stock">
        {
              filteredStock.map((item) => <StockItem key={stock.ticker} company={item} />)
          }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stock: state.stockReducer.stock,
  loading: state.stockReducer.loading,
  filter: state.filterReducer.category,
});
const mapDispatchToProps = (dispatch) => ({
  getStock: () => dispatch(getstock()),
});

StockCatalogue.propTypes = {
  getStock: PropTypes.func.isRequired,
  stock: PropTypes.instanceOf(Array).isRequired,
  loading: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(StockCatalogue);
