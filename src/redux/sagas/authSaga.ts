import {PayloadAction} from '@reduxjs/toolkit';
import {LoginPayload} from '@models/auth';
import {authActions} from '@redux/slices/authSlice';
import {call, fork, put, take} from 'redux-saga/effects';
import {MMKV} from 'react-native-mmkv';
import authApi, {LoginResponse} from '@api/auth';
const storage = new MMKV();

function* handleLogin(payload: LoginPayload) {
  try {
    const res: LoginResponse = yield call(authApi.login, payload);
    const {user, access_token} = res;
    yield put(authActions.loginSuccess(user));
    storage.set('access_token', access_token);
  } catch (error) {
    console.log('Failed to login', error);
  }
}
function* handleLogout() {
  storage.delete('access_token');
}
function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(storage.getString('access_token'));
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
