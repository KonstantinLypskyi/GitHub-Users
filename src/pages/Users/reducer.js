import * as actionTypes from './constants';

export const initialState = {
  list: [],
  single: {},
  loading: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.FETCH_USERS_SUCCESS: {
      const { data } = action.payload;
      return { ...state, list: data, loading: false };
    }
    case actionTypes.FETCH_USERS_FAILED: {
      const { error } = action.payload;
      return { ...state, error, loading: false };
    }
    case actionTypes.FETCH_USER_SINGLE_REQUEST:
      return { ...state, loading: true };
    case actionTypes.FETCH_USER_SINGLE_SUCCESS: {
      const { data: { profile, followers, subscribers } } = action.payload;
      const newProfile = { ...profile, followers, subscribers };
      return { ...state, single: newProfile, loading: false };
    }
    case actionTypes.FETCH_USER_SINGLE_FAILED: {
      const { error } = action.payload;
      return { ...state, error, loading: false };
    }
    default:
      return state;
  }
};
