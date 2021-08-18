import { combineReducers } from 'redux';
import stockReducer from './stock.slice';
import companyReducer from './company.slice';
import filterReducer from './filter.slice';

const rootReducer = combineReducers({
  stock: stockReducer,
  company: companyReducer,
  filter: filterReducer,
});

export default rootReducer;
