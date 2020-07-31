import * as types from "../actions/types";

const initialState = {
  isLoading: false,
  response: false,
  totalResults: 0,
  movies: [],
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.DISABLE_LOADER:
      return {
        ...state,
        isLoading: false,
      };

    case types.ENABLE_LOADER:
      return {
        ...state,
        isLoading: true,
      };

    case types.SET_MOVIES:
      return {
        ...state,
        movies: action.data.Search,
        response: action.data.Response,
        totalResults: action.data.totalResults,
        error: action.data.Error,
      };

    default:
      return state;
  }
};
