import { createSelector } from 'reselect';

const usersSelector = state => state.users;

export const selectListUsers = () =>
  createSelector(
    usersSelector,
    data => data.list
  );

export const selectSingleUser = () =>
  createSelector(
    usersSelector,
    data => data.single
  );

export const selectLoading = () => createSelector(usersSelector, data => data.loading)
