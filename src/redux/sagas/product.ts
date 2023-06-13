import {PayloadAction} from '@reduxjs/toolkit';
import {ListParams, Product} from 'models';
import {call, takeEvery, put} from 'redux-saga/effects';
import productApi from '@api/product';
import {setLoading} from '@redux/slices/generalSlice';
import {
  fetchListProduct,
  fetchProductSuccess,
} from '@redux/slices/productSlice';

function* fetchListProductsSaga(action: PayloadAction<ListParams>) {
  yield put(setLoading(true));
  try {
    const res: Product[] = yield call(productApi.getAll, action.payload);

    if (res) {
      yield put(fetchProductSuccess(res));
      yield put(setLoading(false));
    } else {
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
  }
}

export default function* productWatcher() {
  yield takeEvery(fetchListProduct.type, fetchListProductsSaga);
}
