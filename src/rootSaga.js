import { all } from 'redux-saga/effects'
import homeSaga from './pages/Homepage/saga'
import registerSaga from './pages/Register/saga'
import loginSaga from './pages/Login/saga'

export default function* rootSaga() {
    yield all([
      homeSaga(),
      registerSaga(),
      loginSaga(),
    ])
  }