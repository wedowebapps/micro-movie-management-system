import {
    LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED
} from '../actions';

export const loginUser = (user = null) => ({
    type: LOGIN_USER,
    payload: { user }
});
export const loginUserSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    payload: user
});
export const loginUserFailed = (user) => ({
    type: LOGIN_USER_FAILED,
    payload: user
});
