import { createActions, createReducer } from 'reduxsauce';
import { Types as ReduxSauceTypes } from 'reduxsauce';

/* ---------------- Initial State ---------------- */

export const initialState = {
  gists: [],
  fetching: false,
  error: false,
  saving: false,
  saved: true,
};

/* ---------------- Action Types & Creators ---------------- */

const { Types, Creators } = createActions({
  fetchGists: ['username'],
  saveGist: ['username', 'payload'],

  fetchingGists: null,
  fetchGistsRejected: ['error'],
  gistsFetched: ['gists'],
  savingGist: null,
  gistSaved: null,
});

export const GistsActionTypes = Types;
export default Creators;

/* ---------------- Reducers ---------------- */

export const defaultReducer = (state = initialState) => state;

export const fetchingGistsReducer = state => {
  return { ...state, fetching: true, error: false };
};

export const gistsFetchedReducer = (state, action) => {
  const { gists } = action;
  return { ...state, fetching: false, gists };
};

export const fetchGistsRejectedReducer = state => {
  return { ...state, fetching: false, error: true };
};

export const savingGistReducer = state => {
  return { ...state, saving: true, saved: false, error: false };
};

export const gistSavedReducer = state => {
  return { ...state, saving: false, saved: true };
};

/* ---------------- Bind Types to Reducers ---------------- */

export const reducer = createReducer(initialState, {
  [Types.FETCHING_GISTS]: fetchingGistsReducer,
  [Types.GISTS_FETCHED]: gistsFetchedReducer,
  [Types.FETCH_GISTS_REJECTED]: fetchGistsRejectedReducer,
  [Types.SAVING_GIST]: savingGistReducer,
  [Types.GIST_SAVED]: gistSavedReducer,
  [ReduxSauceTypes.DEFAULT]: defaultReducer,
});
