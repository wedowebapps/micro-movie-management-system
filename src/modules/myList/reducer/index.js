import * as types from "../actions/types";

const initialState = {
  myList: [],
  myWatchedList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MY_WATCHED_MOVIES:
      return {
        ...state,
        myWatchedList: action.data.data,
      };
    case types.SET_MY_LIST_MOVIES:
      return {
        ...state,
        myList: action.data.data,
      };

    default:
      return state;
  }
};
