import 'regenerator-runtime/runtime';
import { put, takeEvery, call } from 'redux-saga/effects';
import request from 'utils/request/axios';
import * as actions from './actions';
import { FETCH_USERS_REQUEST, FETCH_USER_SINGLE_REQUEST } from './constants';

function* fetchUsers(action) {
  try {
    const {
      payload: { quantity }
    } = action;
    const response = yield call(request.get, `/users?per_page=${quantity}`);

    if (response && response.length) {
      yield put(actions.successFetchUsers(response));
    } else {
      throw new Error(response);
    }
  } catch (err) {
    yield put(actions.failedFetchUsers(err));
  }
}

function* fetchSingleUser(action) {
  try {
    const {
      payload: { id }
    } = action;
    const profile = yield call(request.get, `/users/${id}`);
    const followers = yield call(request.get, `/users/${id}/followers`);
    const subscribers = yield call(request.get, `users/${id}/subscriptions`);
    if (Object.keys(profile) && Object.keys(profile).length) {
      yield put(
        actions.successFetchSingleUser({ profile, followers, subscribers })
      );
    } else {
      throw new Error(profile);
    }
  } catch (err) {
    yield put(actions.failedFetchSingleUser(err));
  }
}

export function* rootSaga() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsers),
  yield takeEvery(FETCH_USER_SINGLE_REQUEST, fetchSingleUser);
}