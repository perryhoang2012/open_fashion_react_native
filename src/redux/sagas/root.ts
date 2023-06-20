import {all} from 'redux-saga/effects';

import productWatcher from './product';
import userWatcher from './user';
import {authSaga} from './authSaga';

// import storageWatcher from "./storage";

function* rootSaga() {
  yield all([productWatcher(), userWatcher(), authSaga()]);
}

export default rootSaga;
