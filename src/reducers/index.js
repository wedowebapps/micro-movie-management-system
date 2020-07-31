/* 
 * combines all th existing reducers
 */
import { combineReducers } from 'redux';
import auth from './auth';
import dashboardReducer from '../modules/dashboard/reducer'

const reducers = combineReducers({
  auth: auth,
  dashboard: dashboardReducer,
});

export default reducers;