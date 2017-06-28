import { TOGGLE_FILTER_MODAL } from '../Actions/types';

const INITIAL_STATE = {
  showFilterModal: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_FILTER_MODAL:
      return { ...state, showFilterModal: !state.showFilterModal };
    default:
      return state;
  }
};
