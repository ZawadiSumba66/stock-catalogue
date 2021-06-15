import { connect } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getstock } from '../actions/index';
import StockItem from './StockItem';

const StockCatalogue = ({ getStock, loading, stock }) => {
  useEffect(() => {
    getStock();
  }, []);
  if (loading) {
    return <p>Please wait...</p>;
  }
  return (
    <div>
      {
              stock.map((item) => <StockItem key={stock.ticker} company={item} />)
          }
    </div>
  );
};

const mapStateToProps = (state) => ({
  stock: state.stockReducer.stock,
  loading: state.stockReducer.loading,
});
const mapDispatchToProps = (dispatch) => ({
  getStock: () => dispatch(getstock()),
});

StockCatalogue.propTypes = {
  getStock: PropTypes.func.isRequired,
  stock: PropTypes.instanceOf(Array).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(StockCatalogue);
