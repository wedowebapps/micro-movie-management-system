import Api from '../../../api';
import routes from './index';

export function fetchData (token) {
  return Api(
    routes.FETCH_DATA, null, 'get', ''
  );
}