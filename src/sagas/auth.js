import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    LOGIN_USER
} from '../actions';

import { 
    loginUserSuccess, loginUserFailed
} from '../actions';

const loginWithEmailPasswordAsync = async (data) =>
    await fetch(`APIURL`, {
            cache: "no-store",
            headers : {},
            method: 'POST',
            body : JSON.stringify(data.user)
        }).then(response => response.json())
        .then(response => {
            return Promise.resolve(response);
        }).catch(error => {
            return Promise.resolve({status:404, message:error});
        });

function* loginWithEmailPassword({ payload }) {
    try {
        // const loginUser = yield call(loginWithEmailPasswordAsync, payload);        
        // if (loginUser.code === 200) {
        //     localStorage.setItem('userData', JSON.stringify(loginUser.data.user));
        //     yield put(loginUserSuccess(loginUser));
        // } else {
        //     yield put(loginUserFailed(loginUser));
        //     console.log('login failed :', loginUser.message);
        // }
        let dummyText = {data : 'dSVp8THENR2RKLYLX49XdELDhO2pBEMPRD0utbWe8ps'};
        localStorage.setItem('userData', JSON.stringify(dummyText));
        yield put(loginUserSuccess( dummyText ) );
    } catch (error) {
        console.log('login error : ', error);
    }
}


export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

export default function* rootSaga() {
    yield all([
        fork(watchLoginUser)
    ]);
}