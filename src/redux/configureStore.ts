import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import productSlice from './slices/productSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root';
import generalSlice from './slices/generalSlice';

const reducer = combineReducers({
  product: productSlice,
  general: generalSlice,
});

export type RootState = ReturnType<typeof reducer>;

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
