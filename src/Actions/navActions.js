import {
  TOGGLE_FILTER,
  TOGGLE_SEARCH,
  UPDATE_QUERY
} from './types';

export const toggleFilter = () => ({
  type: TOGGLE_FILTER
});

export const toggleSearch = () => ({
  type: TOGGLE_SEARCH
});

export const updateQuery = query => ({
  type: UPDATE_QUERY,
  payload: query
});
