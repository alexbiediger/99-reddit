/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_POST } from 'containers/App/constants';
import { postLoaded, postLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Subreddit Post request/response handler
 */
export function* getPost(action) {
  // Select SR name from store
  try {
    // Call our request helper (see 'utils/request')
    const post = yield call(request, `/reddit-api/${action.url}`);
    yield put(postLoaded(post[0].data.children[0], post[1].data.children));
  } catch (err) {
    yield put(postLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* postData() {
  // Watches for LOAD_POST actions and calls getPost when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_POST, getPost);
}
