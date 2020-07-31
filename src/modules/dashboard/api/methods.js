import Api from '../../../api';
import routes from './index';
import { convertObjectToQuerystring } from "../../../utils/helper";

var _ = require("lodash");

export function fetchMovies (filters) {
  let filter = "";
  if (!_.isEmpty(filters)) {
    filter = `&${convertObjectToQuerystring(filters)}`;
  }
  return Api(
    `${routes.FETCH_MOVIES}?${filter}`, null, 'get', ''
  );
}