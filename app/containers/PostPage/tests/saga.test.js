/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_POST } from 'containers/App/constants';
import { postLoaded, postLoadingError } from 'containers/App/actions';

import redditData, { getPost } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getPost Saga', () => {
  let getPostGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getPostGenerator = getPost({ url: '' });

    const callDescriptor = getPostGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the postLoaded action if it requests the data successfully', () => {
    const result = [
      {
        data: {
          title: 'First post',
        },
      },
      [
        {
          data: {
            body: 'First comment',
          },
        },
        {
          data: {
            body: 'Second comment',
          },
        },
      ],
    ];

    const response = [
      {
        kind: 'Listing',
        data: {
          modhash: '',
          dist: 1,
          children: [
            {
              data: { title: 'First post' },
            },
          ],
        },
      },
      {
        kind: 'Listing',
        data: {
          modhash: '',
          dist: null,
          children: [
            {
              data: { body: 'First comment' },
            },
            {
              data: { body: 'Second comment' },
            },
          ],
        },
      },
    ];

    const putDescriptor = getPostGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(postLoaded(...result)));
  });

  it('should call the postLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getPostGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(postLoadingError(response)));
  });
});

describe('redditDataSaga Saga', () => {
  const redditDataSaga = redditData();

  it('should start task to watch for LOAD_POST action', () => {
    const takeLatestDescriptor = redditDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_POST, getPost));
  });
});
