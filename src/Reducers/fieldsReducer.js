import {
  UPDATE_QUERY
} from '../Actions/types';

const INITIAL_STATE = {
  searchQuery: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log('ACTION FIRED: ', action);
  switch (action.type) {
    case UPDATE_QUERY:
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};
