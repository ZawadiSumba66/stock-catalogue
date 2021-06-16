import axios from 'axios';
import {
  GET_STOCK,
  LOAD_STOCK,
  CATCH_STOCK_ERROR,
  GET_COMPANY,
  CATCH_COMPANY_ERROR,
  LOAD_COMPANY,
} from './type';

const API_KEY = '077d17cbc276e91560070906ac3c6ddc';

const getstock = () => async (dispatch) => {
  dispatch({
    type: LOAD_STOCK,
  });
  await axios.get(`https://financialmodelingprep.com/api/v3/actives?apikey=${API_KEY}`)
    .then((response) => {
      dispatch({
        type: GET_STOCK,
        payload: response.data,
      });
    }).catch((error) => {
      dispatch({
        type: CATCH_STOCK_ERROR,
        payload: error.message,
      });
    });
};

const getcompany = (ticker) => async (dispatch) => {
  dispatch({
    type: LOAD_COMPANY,
  });
  axios.get(`https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=${API_KEY}`)
    .then((response) => {
      dispatch({
        type: GET_COMPANY,
        payload: response.data[0],
      });
    }).catch((error) => {
      dispatch({
        type: CATCH_COMPANY_ERROR,
        payload: error,
      });
    });
};
export { getstock, getcompany };
