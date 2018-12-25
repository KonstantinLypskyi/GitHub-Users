// modules
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// system
import { reducers } from './Root/reducer';
import sagas from './Root/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

export default store;
