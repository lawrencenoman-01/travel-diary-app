/* eslint-disable no-unused-vars */
import { call, put, takeLatest } from 'redux-saga/effects';
import { REGISTER_REQUEST } from './constants';
import { registerAPI } from '../../domain/api'; // Ganti dengan API yang sesuai
import { registerSuccess, registerFailure } from './actions';

export function* doRegister(action) {
    try {
        const { fullname, email, password } = action.payload;
        const response = yield call(registerAPI, fullname, email, password);

        if (response) {
            yield put(registerSuccess(response));
        } else {
            yield put(registerFailure("Registration failed"));
        }
    } catch (error) {
        yield put(registerFailure("An error occurred"));
    }
}

export default function* registerSaga() {
    yield takeLatest(REGISTER_REQUEST, doRegister);
}