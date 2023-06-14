import {all} from 'redux-saga/effects';

import productWatcher from './product';
import userWatcher from './user';

// import storageWatcher from "./storage";

function* rootSaga() {
  yield all([productWatcher()]);
  yield all([userWatcher()]);
}

export default rootSaga;
