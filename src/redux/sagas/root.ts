import {all} from 'redux-saga/effects';

import productWatcher from './product';
import userWatcher from './user';

// import storageWatcher from "./storage";

function* rootSaga() {
  yield all([productWatcher(), userWatcher()]);
}

export default rootSaga;
