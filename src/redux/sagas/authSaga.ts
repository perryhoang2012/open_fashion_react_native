import authApi, {LoginResponse} from '@api/auth';
import {LoginPayload} from '@models/auth';
import {authActions} from '@redux/slices/authSlice';
import {PayloadAction} from '@reduxjs/toolkit';
import {errorToast, toast} from '@utils/Toast';
import {call, fork, put, select, take} from 'redux-saga/effects';

function* handleLogin(payload: LoginPayload) {
  try {
    const res: LoginResponse = yield call(authApi.login, payload);

    if (res.user && res.access_token) {
      toast('Login successful');
      yield put(authActions.loginSuccess(res));
    } else {
      errorToast(res.message, res.message);
    }
  } catch (error: any) {
    errorToast(error?.message, error?.message);
  }
}

function* handleLogout() {
  yield put(authActions.logout());
}

function* handleRegister(payload: LoginPayload) {
  try {
    const res: LoginResponse = yield call(authApi.login, payload);

    if (res.user && res.access_token) {
      toast('Login successful');
      yield put(authActions.loginSuccess(res));
    } else {
      errorToast(res.message, res.message);
    }
  } catch (error: any) {
    errorToast(error?.message, error?.message);
  }
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
  // yield takeLatest(authActions.register.type, handleRegister);
}
