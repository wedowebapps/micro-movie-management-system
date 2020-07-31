import * as types from "../actions/types";

export const enableLoader = () => ({
  type: types.ENABLE_LOADER,
});

export const disableLoader = () => ({
  type: types.DISABLE_LOADER,
});

export const fetchMovies = () => ({
  type: types.FETCH_MOVIES,
});

export const setMovies = (data) => ({
  type: types.SET_MOVIES,
  data,
});
