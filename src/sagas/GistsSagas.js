import { call, put } from 'redux-saga/effects';

import { sleep } from '../lib/timers';
import GistsActions from '../redux/GistsRedux';
import * as queryManager from '../services/queryManager';

/**
 * Dispatchs a Gist data fetch mutation
 *
 * @param {payload} payload username login
 */
export function* fetchGists({ username }) {
  yield put(GistsActions.fetchingGists());

  try {
    const fetchedGists = yield call(queryManager.getUserGists, username);
    yield put(GistsActions.gistsFetched(fetchedGists));
  } catch (error) {
    yield put(GistsActions.fetchGistsRejected(error));
  }
}

/**
 * Dispatchs a Gist Save mutation
 *
 * @param {*} username loggedin username login
 * @param {*} payload gist data to be stored
 */
export function* saveGist(username, payload) {
  yield put(GistsActions.savingGist());

  try {
    // FIXME: Remove timer after adding handler to save gists
    yield sleep(1500);
    // const response = yield call(queryManager.saveGist, {username, payload});

    yield put(GistsActions.gistSaved());
  } catch (error) {
    // TODO: Add action to reject gists saving
    // yield put(GistsActions.saveGistRejected(error));
  }
}
