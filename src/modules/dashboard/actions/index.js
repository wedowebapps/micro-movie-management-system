import * as types from "../actions/types";

export const enableLoader = () => ({
  type: types.ENABLE_LOADER,
});

export const disableLoader = () => ({
  type: types.DISABLE_LOADER,
});

export const fetchMovies = ({ filters }) => ({
  type: types.FETCH_MOVIES,
  filters,
});

export const setMovies = (data) => ({
  type: types.SET_MOVIES,
  data,
});
