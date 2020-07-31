import dashboardRoutes from '../modules/dashboard/api'

const ApiConstants = {
  BASE_URL: 'https://randomuser.me/',
  ...dashboardRoutes,
};

export default ApiConstants;
