import { all, takeLatest } from 'redux-saga/effects';

/* ---------------- Action Types ---------------- */

import { GistsActionTypes } from '../redux/GistsRedux';

/* ---------------- Sagas ---------------- */

import { fetchGists, saveGist } from './GistsSagas';

/* ---------------- Bind Types To Sagas ---------------- */

export default function* sagasRoot() {
  yield all([
    takeLatest(GistsActionTypes.FETCH_GISTS, fetchGists),
    takeLatest(GistsActionTypes.SAVE_GIST, saveGist),
  ]);
}
