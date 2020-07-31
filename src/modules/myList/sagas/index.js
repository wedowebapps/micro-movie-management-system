import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as dashboardActions from '../actions';
import { FETCH_DASHBOARD } from '../actions/types'

import * as dashboardApi from '../api/methods'


function* fetchDashboard () {
    yield put (dashboardActions.enableLoader());
    let data = yield call(dashboardApi.fetchData);
    yield put (dashboardActions.setDashboard(data));
    yield put (dashboardActions.disableLoader());
}

export function* watchLoginUser() {
    yield takeEvery(FETCH_DASHBOARD, fetchDashboard);
}

export default function* dashboardSaga() {
    yield all([
        fork(watchLoginUser)
    ]);
}