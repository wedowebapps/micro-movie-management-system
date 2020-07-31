import { all } from 'redux-saga/effects';
import authSagas from './auth';

import dashboardSagas from '../modules/dashboard/sagas'

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    dashboardSagas(),
  ]);
}