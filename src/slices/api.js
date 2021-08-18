import axios from 'axios';

const BASE_URL = 'https://financialmodelingprep.com/api/v3/';
const API_KEY = '077d17cbc276e91560070906ac3c6ddc';

const api = {
  get(endpoints) {
    return axios.get(`${BASE_URL}${endpoints}`);
  },
};

export { api, API_KEY };
