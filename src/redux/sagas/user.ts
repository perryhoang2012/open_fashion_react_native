import {setLoading} from '@redux/slices/generalSlice';
import {login} from '@redux/slices/userSlice';
import {PayloadAction} from '@reduxjs/toolkit';
import {ListParams} from 'models';
import {put, takeEvery} from 'redux-saga/effects';
function* loginSaga(action: PayloadAction<ListParams>) {
  yield put(setLoading(true));
}

export default function* userWatcher() {
  yield takeEvery(login.type, loginSaga);
}
