import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    RESET_LOGIN,
} from './constants'

export const loginRequest = (credentials) => ({
    type: LOGIN_REQUEST,
    payload: credentials
});
export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});
export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});
export const resetLogin = () => ({
    type: RESET_LOGIN,
})