import {PayloadAction} from '@reduxjs/toolkit';
import {LoginPayload} from '@models/auth';
import {authActions} from '@redux/slices/authSlice';
import {call, fork, put, select, take} from 'redux-saga/effects';
import authApi, {LoginResponse} from '@api/auth';

function* handleLogin(payload: LoginPayload) {
  try {
    const res: LoginResponse = yield call(authApi.login, payload);
    yield put(authActions.loginSuccess(res));
  } catch (error) {
    console.log('Failed to login', error);
  }
}
function* handleLogout() {
  yield put(authActions.logout());
}
function* watchLoginFlow() {
  while (true) {
    const token: string = yield select(state => state.user.token);
    const isLoggedIn = Boolean(token);
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type,
      );
      yield fork(handleLogin, action.payload);
    }

    yield take([authActions.logout.type, authActions.loginFailed.type]);
    yield call(handleLogout);
  }
}
export function* authSaga() {
  yield fork(watchLoginFlow);
}
