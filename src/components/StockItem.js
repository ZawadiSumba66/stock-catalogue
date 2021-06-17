import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StockItem = ({ company }) => (
  <div className="card bg-dark text-center">
    <h4>{company.companyName}</h4>
    <h3 data-testid="stock-item">
      $
      {company.price}
    </h3>
    Percentage Change:
    <span className={company.changesPercentage.includes('-') ? 'text-danger' : 'text-success'}>
      {company.changesPercentage}
    </span>
    <p className="font-weight-bold text-primary">{company.ticker}</p>
    <div className="card-footer">
      <Link className="card-link btn text-light font-weight-bold" to={`/${company.ticker}`}>View more</Link>
    </div>
  </div>
);

StockItem.propTypes = {
  company: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default StockItem;
