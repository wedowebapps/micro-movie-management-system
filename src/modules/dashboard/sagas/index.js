import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as dashboardActions from "../actions";
import * as types from "../actions/types";

import * as dashboardApi from "../api/methods";
import toast from "../../../utils/toast";

function* fetchMovie({ filters }) {
  try {
    yield put(dashboardActions.enableLoader());
    let data = yield call(dashboardApi.fetchMovies, filters);
    yield put(dashboardActions.setMovies(data));
    toast.success("Data Retrived");
    yield put(dashboardActions.disableLoader());
  } catch (err) {
    err.then((response) => {
      toast.error("Faild to retrive data");
    });
  }
}

export function* watchLoginUser() {
  yield takeEvery(types.FETCH_MOVIES, fetchMovie);
}

export default function* dashboardSaga() {
  yield all([fork(watchLoginUser)]);
}
