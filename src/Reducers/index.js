import { combineReducers } from 'redux';
import NavReducer from './navReducer';
import FormsReducer from './formsReducer';

export default combineReducers({
  nav: NavReducer,
  forms: FormsReducer
});
