import * as types from "../actions/types";

export const setMyListMovies = (data) => ({
  type: types.SET_MY_LIST_MOVIES,
  data,
});

export const setMyWatchedMovies = (data) => ({
  type: types.SET_MY_WATCHED_MOVIES,
  data,
});
