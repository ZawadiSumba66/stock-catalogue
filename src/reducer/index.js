import { combineReducers } from 'redux';
import stockReducer from './stockReducer';
import filterReducer from './filter';

export default combineReducers({
  stockReducer, filterReducer,
});
