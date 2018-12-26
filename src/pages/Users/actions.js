import * as actionTypes from './constants';

// List

export const requestFetchUsers = quantity => ({
    type: actionTypes.FETCH_USERS_REQUEST,
    payload: { quantity }
});

export const successFetchUsers = data => ({
    type: actionTypes.FETCH_USERS_SUCCESS,
    payload: { data }
});

export const failedFetchUsers = error => ({
    type: actionTypes.FETCH_USERS_FAILED,
    payload: { error }
});

// Single

export const requestFetchSingleUser = id => ({
    type: actionTypes.FETCH_USER_SINGLE_REQUEST,
    payload: { id }
});

export const successFetchSingleUser = data => ({
    type: actionTypes.FETCH_USER_SINGLE_SUCCESS,
    payload: { data }
});

export const failedFetchSingleUser = error => ({
    type: actionTypes.FETCH_USER_SINGLE_FAILED,
    payload: { error }
});