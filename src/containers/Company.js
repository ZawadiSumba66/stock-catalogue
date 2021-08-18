import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getcompany } from '../slices/company.slice';

function Company({ company, loading, getcompany }) {
  const { ticker } = useParams();
  useEffect(() => {
    getcompany(ticker);
  }, []);
  if (loading) {
    return <p>Please wait...</p>;
  }
  return (
    <div className="company" data-testid="company">
      <div className="text-center">
        <img src={company.image} alt="" />
      </div>
      <h1 className="text-center">{company.companyName}</h1>
      <hr className="my-display" />
      <div className="company-details mx-auto">
        <div className="card text-light font-weight-bold">
          <h4 className="text-primary font-weight-bold">Country:</h4>
          <p>
            {company.country}
          </p>
        </div>
        <div className="card text-light font-weight-bold">
          <h4 className="text-primary font-weight-bold">Price</h4>
          <p>
            $
            {company.price}
          </p>
        </div>
        <div className="card text-light font-weight-bold">
          <h4 className="text-primary font-weight-bold">Beta</h4>
          <p>
            {company.beta}
          </p>
        </div>
        <div className="card text-light font-weight-bold">
          <h4 className="text-primary font-weight-bold">LastDiv</h4>
          <p>
            {company.lastDiv}
          </p>
        </div>
        <div className="card text-light font-weight-bold">
          <h4 className="text-primary font-weight-bold">Range</h4>
          <p>
            {company.range}
          </p>
        </div>
        <div className="card text-light font-weight-bold">
          <h4 className="text-primary font-weight-bold">Exchange</h4>
          <p>
            {company.exchange}
          </p>
        </div>
      </div>
      <Link className="card-link btn font-weight-bold text-light text-uppercase btn-large ml-4 mt-4" to="/"> Go back</Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  company: state.company.company,
  loading: state.company.loading,
});

Company.propTypes = {
  company: PropTypes.instanceOf(Array).isRequired,
  loading: PropTypes.bool.isRequired,
  getcompany: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getcompany })(Company);
