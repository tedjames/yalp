import {
  UPDATE_QUERY,
  UPDATE_DESTINATION
} from '../Actions/types';

const INITIAL_STATE = {
  searchQuery: '',
  destination: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log('ACTION FIRED: ', action);
  switch (action.type) {
    case UPDATE_QUERY:
      return { ...state, searchQuery: action.payload };
    case UPDATE_DESTINATION:
      return { ...state, destination: action.payload };
    default:
      return state;
  }
};
