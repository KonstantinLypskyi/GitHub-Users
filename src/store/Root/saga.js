// modules
import { all, fork } from 'redux-saga/effects';
// system
import { rootSaga as users } from 'pages/Users/saga';

const sagas = [
  users
];

export default function* rootSaga() {
  const globalSagasForks = sagas.map(saga => fork(saga));
  yield all([...globalSagasForks]);
}
