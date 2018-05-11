import { createActions, createReducer } from 'reduxsauce';
import { Types as ReduxSauceTypes } from 'reduxsauce';

/* ---------------- Initial State ---------------- */

export const initialState = {
  loging: false,
  loggedin: false,
  error: false,
  profile: {
    username: '',
  },
};

/* ---------------- Action Types & Creators ---------------- */

const { Types, Creators } = createActions({
  logingUser: null,
  userLoggedIn: ['profile'],
  logingUserRejected: ['error'],
});

export const GistsActionTypes = Types;
export default Creators;

/* ---------------- Reducers ---------------- */

export const defaultReducer = () => initialState;

export const logingUserReducer = state => {
  return { ...state, loging: true };
};

export const userLoggedInReducer = (state, action) => {
  const { profile } = action;
  return { ...state, loging: false, loggedin: true, profile };
};

export const logingUserRejectedReducer = (state, action) => {
  const { error } = action;
  return { ...state, loging: false, error };
};

/* ---------------- Bind Types to Reducers ---------------- */

export const reducer = createReducer(initialState, {
  [Types.LOGING_USER]: logingUserReducer,
  [Types.USER_LOGGED_IN]: userLoggedInReducer,
  [Types.LOGING_USER_REJECTED]: logingUserRejectedReducer,
  [ReduxSauceTypes.DEFAULT]: defaultReducer,
});
