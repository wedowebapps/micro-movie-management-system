/*
 * combines all th existing reducers
 */
import { combineReducers } from "redux";
import dashboardReducer from "../modules/dashboard/reducer";
import listReducer from "../modules/myList/reducer";

const reducers = combineReducers({
  dashboard: dashboardReducer,
  list: listReducer,
});

export default reducers;
