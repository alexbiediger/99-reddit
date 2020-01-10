/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_POSTS } from 'containers/App/constants';
import { postsLoaded, postsLoadingError } from 'containers/App/actions';

import redditData, { getPosts } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getPosts Saga', () => {
  let getPostsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getPostsGenerator = getPosts();

    const callDescriptor = getPostsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the postsLoaded action if it requests the data successfully', () => {
    const result = [
      {
        title: 'First post',
      },
      {
        title: 'Second post',
      },
    ];
    const response = { data: { children: result } };
    const putDescriptor = getPostsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(postsLoaded(result)));
  });

  it('should call the postsLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getPostsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(postsLoadingError(response)));
  });
});

describe('redditDataSaga Saga', () => {
  const redditDataSaga = redditData();

  it('should start task to watch for LOAD_POSTS action', () => {
    const takeLatestDescriptor = redditDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_POSTS, getPosts));
  });
});
