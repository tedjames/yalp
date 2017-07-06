import {
  TOGGLE_FILTER_MODAL,
  TOGGLE_STATUS_BAR
} from '../Actions/types';

const INITIAL_STATE = {
  showFilterModal: false,
  showStatusBar: true
};

export default (state = INITIAL_STATE, action) => {
  console.log('ACTION FIRED: ', action);
  switch (action.type) {
    case TOGGLE_FILTER_MODAL:
      return { ...state, showFilterModal: !state.showFilterModal };
    case TOGGLE_STATUS_BAR:
      return { ...state, showStatusBar: !state.showStatusBar };
    default:
      return state;
  }
};
