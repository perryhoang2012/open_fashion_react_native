import {setLoading} from '@redux/slices/generalSlice';
import {login, loginSuccess} from '@redux/slices/userSlice';
import {put, takeEvery} from 'redux-saga/effects';

function* loginSaga() {
  try {
    yield put(setLoading(true));
    yield put(loginSuccess());
    yield put(setLoading(false));
  } catch (e) {}
}

export default function* userWatcher() {
  yield takeEvery(login.type, loginSaga);
}
