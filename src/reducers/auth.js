import {
    LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED
} from '../actions';

const INIT_STATE = {
    // user: (JSON.parse(localStorage.getItem('userData')) !== null ) ? JSON.parse(localStorage.getItem('userData')).data : null,
    user: null,
    loading: false,
    type : '',
    isLoggedIn : false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loading: true };
        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload.data, type : action.type, isLoggedIn : true };
        case LOGIN_USER_FAILED:
            return { ...state, loading: false, user: action.payload, type : action.type, isLoggedIn : false };        
        default: return { ...state };
    }
}