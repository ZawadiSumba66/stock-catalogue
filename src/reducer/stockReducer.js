import {
    GET_STOCK,
    CATCH_COMPANY_ERROR,
    LOAD_COMPANY,
    LOAD_STOCK, GET_COMPANY,
    CATCH_STOCK_ERROR,
  } from '../actions/type';
  
  const initialState = {
    stock: [],
    loading: false,
    error: '',
    company: [],
  };
  
  export default function stockReducer(state = initialState, action) {
    switch (action.type) {
      case LOAD_STOCK:
        return {
          ...state,
          loading: true,
        };
      case GET_STOCK:
        return {
          ...state,
          stock: action.payload.results,
          loading: false,
        };
      case CATCH_STOCK_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LOAD_COMPANY:
        return {
          ...state,
          loading: true,
        };
      case GET_COMPANY:
        return {
          ...state,
          loading: false,
          company: action.payload,
        };
      case CATCH_COMPANY_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  