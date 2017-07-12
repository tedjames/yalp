import { TOGGLE_FILTER, TOGGLE_SEARCH, SHOW_LOCATION_HISTORY, SHOW_CATEGORIES } from './types';

export const toggleFilter = () => ({
  type: TOGGLE_FILTER
});

export const toggleSearch = () => ({
  type: TOGGLE_SEARCH
});

export const showLocationHistory = () => ({
  type: SHOW_LOCATION_HISTORY
});

export const showCategories = () => ({
  type: SHOW_CATEGORIES
});
