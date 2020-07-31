import { 
  SET_DASHBOARD, UPDATE_DASHBOARD,
  ENABLE_LOADER, DISABLE_LOADER
} from "../actions/types";

const initialState = {
  data: "Demo",
  isLoading: false,
  userData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case DISABLE_LOADER:
      return {
        ...state,
        isLoading: false,
      }

    case ENABLE_LOADER:
      return {
        ...state,
        isLoading: true,
      }

    case SET_DASHBOARD:
      return {
        ...state,
        userData: action.data.results[0],
      };
    
    case UPDATE_DASHBOARD:
      return {
        ...state,
      }

    default:
      return state;
  }
};
