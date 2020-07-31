import { 
  FETCH_DASHBOARD, SET_DASHBOARD, UPDATE_DASHBOARD,
  ENABLE_LOADER, DISABLE_LOADER,
} from '../actions/types';

export const enableLoader = () => ({
  type: ENABLE_LOADER,
});

export const disableLoader = () => ({
  type: DISABLE_LOADER,
});

export const fetchDashoard = () => ({
  type: FETCH_DASHBOARD,
});

export const setDashboard = (data) => ({
  type: SET_DASHBOARD,
  data,
});

export const updateDashboard = (data) => ({
  type: UPDATE_DASHBOARD,
  data,
});