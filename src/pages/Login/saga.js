/* eslint-disable no-unused-vars */
import { call, put, takeLatest } from 'redux-saga/effects'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants'
import { getAllPost, loginAPI } from '../../domain/api'
import { loginRequest, loginSuccess, loginFailure } from './actions'

export function* doLogin(action) {
    try {
        const users = yield call(loginAPI)
        const userWithEmail = users.find((user) => user.email === action.payload.email && user.password === action.payload.password)
        console.log(action.payload, 'Testing >>>>');
        
        if (!userWithEmail) {
            yield put(loginFailure("Email and Password do not match"))
        } else {
            localStorage.setItem("user", JSON.stringify(userWithEmail))
            yield put(loginSuccess(userWithEmail))
        }
    } catch (error) {
        // Tangani kesalahan saat memanggil loginAPI
        yield put(loginFailure("An error occurred"));
    }
}

export default function* loginSaga() {
    yield takeLatest(LOGIN_REQUEST, doLogin);
}  





