import { combineReducers } from 'redux';
import NavReducer from './navReducer';
import FieldsReducer from './fieldsReducer';

export default combineReducers({
  nav: NavReducer,
  fields: FieldsReducer
});
