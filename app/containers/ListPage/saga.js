/**
 * Gets the repositories of the user from Github
 */

import {
  call, put, select, takeLatest
} from 'redux-saga/effects';
import { LOAD_POSTS } from 'containers/App/constants';
import { postsLoaded, postsLoadingError } from 'containers/App/actions';
import { makeSelectAfter } from 'containers/App/selectors';

import request from 'utils/request';

/**
 * Reddit posts request/response handler
 */
export function* getPosts(action) {
  const sort = (action && action.sort) || '';
  const after = yield select(makeSelectAfter());
  const requestURL = `/reddit-api/${sort}/${after && `?after=${after}`}`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    yield put(postsLoaded(response.data.children, response.data.after));
  } catch (err) {
    yield put(postsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* redditData() {
  // Watches for LOAD_POSTS actions and calls getPosts when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_POSTS, getPosts);
}
