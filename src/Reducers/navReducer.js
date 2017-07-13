import {
  TOGGLE_FILTER,
  TOGGLE_SEARCH
} from '../Actions/types';

const INITIAL_STATE = {
  showFilterModal: false,
  showSearchModal: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log('ACTION FIRED: ', action);
  switch (action.type) {
    case TOGGLE_FILTER:
      return { ...state, showFilterModal: !state.showFilterModal };
    case TOGGLE_SEARCH:
      return { ...state, showSearchModal: !state.showSearchModal };
    default:
      return state;
  }
};
