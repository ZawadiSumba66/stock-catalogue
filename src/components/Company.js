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
    <div>
      <img src={company.image} alt="" />
      <h1>{company.name}</h1>
      <p>{company.country}</p>
      <p>{company.currency}</p>
      <p>{company.price}</p>
      <p><p>{company.changes}</p></p>
      <p>{company.exchange}</p>
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
