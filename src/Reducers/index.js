import { combineReducers } from 'redux';
import NavReducer from './navReducer';

export default combineReducers({
  nav: NavReducer
});
