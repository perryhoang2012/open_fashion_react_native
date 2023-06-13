import {all} from 'redux-saga/effects';

import productWatcher from './product';

// import storageWatcher from "./storage";

function* rootSaga() {
  yield all([productWatcher()]);
}

export default rootSaga;
