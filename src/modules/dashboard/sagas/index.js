import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as dashboardActions from "../actions";
import * as types from "../actions/types";

import * as dashboardApi from "../api/methods";

function* fetchMovie() {
  try {
    yield put(dashboardActions.enableLoader());
    let data = yield call(dashboardApi.fetchMovies);
    yield put(dashboardActions.setMovies(data));
    yield put(dashboardActions.disableLoader());
  } catch(err) {
    err.then((response) => {
      console.log(response.message);
    });
  }
}

export function* watchLoginUser() {
  yield takeEvery(types.FETCH_MOVIES, fetchMovie);
}

export default function* dashboardSaga() {
  yield all([fork(watchLoginUser)]);
}
