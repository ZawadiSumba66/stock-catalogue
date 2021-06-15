import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StockItem = ({ company }) => (
  <div>
    <p>{company.companyName}</p>
    <p>{company.price}</p>
    <p>{company.changesPercentage}</p>
    <p>{company.ticker}</p>
    <Link to={`/${company.ticker}`}>View more</Link>
    <br />
  </div>
);

StockItem.propTypes = {
  company: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default StockItem;
