import dashboardRoutes from '../modules/dashboard/api'

const ApiConstants = {
  BASE_URL: 'http://www.omdbapi.com/?apikey=32395055&type=movie&s=bad',
  ...dashboardRoutes,
};

export default ApiConstants;
