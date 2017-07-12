import {
  TOGGLE_FILTER,
  TOGGLE_SEARCH,
  SHOW_LOCATION_HISTORY,
  SHOW_CATEGORIES
} from '../Actions/types';

const INITIAL_STATE = {
  showFilterModal: false,
  showSearchModal: true,
  showLocationHistory: false,
  showCategories: true
};

export default (state = INITIAL_STATE, action) => {
  console.log('ACTION FIRED: ', action);
  switch (action.type) {
    case TOGGLE_FILTER:
      return { ...state, showFilterModal: !state.showFilterModal };
    case TOGGLE_SEARCH:
      return { ...state, showSearchModal: !state.showSearchModal };
    case SHOW_LOCATION_HISTORY:
      return { ...state, showLocationHistory: true, showCategories: false };
    case SHOW_CATEGORIES:
      return { ...state, showLocationHistory: false, showCategories: true };
    default:
      return state;
  }
};
