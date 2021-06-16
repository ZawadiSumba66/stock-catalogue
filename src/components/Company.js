import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getcompany } from '../actions/index';

function Company({ company, loading, getcompany }) {
  const { ticker } = useParams();
  useEffect(() => {
    getcompany(ticker);
  }, []);
  if (loading) {
    return <p>Please wait...</p>;
  }
  return (
    <div className="company text-center">
      <img src={company.image} alt="" />
      <h1>{company.companyName}</h1>
      <div className="company-details">

        <div>
          <h5>Country:</h5>
          <p>
            {company.country}
          </p>
        </div>
        <div>
          <h5>Price</h5>
          <p>
            $
            {company.price}
          </p>
        </div>
        <div>
          x
          <h5>Beta</h5>
          <p>
            {company.beta}
          </p>
        </div>
        <div>
          <h5>LastDiv</h5>
          <p>
            {company.lastDiv}
          </p>
        </div>
        <div>
          <h5>Range</h5>
          <p>
            {company.range}
          </p>
        </div>
        <div>
          <h5>Exchange</h5>
          <p>
            {company.exchange}
          </p>
        </div>
      </div>
      <Link to="/"> Go back</Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  company: state.stockReducer.company,
  loading: state.stockReducer.loading,
});

Company.propTypes = {
  company: PropTypes.instanceOf(Array).isRequired,
  loading: PropTypes.bool.isRequired,
  getcompany: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getcompany })(Company);
