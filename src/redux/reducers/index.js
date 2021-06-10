import { combineReducers } from 'redux';
import { counter, decrease, loggedIn } from './ProductReducer';

const reducers = combineReducers({
  increase: counter,
  decrease: decrease,
  authenticate: loggedIn,
});

export default reducers;
