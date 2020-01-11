import appReducer from '../reducer';
import {
  loadPosts,
  postsLoaded,
  postsLoadingError,
  loadPost,
  postLoaded,
  postLoadingError,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      posts: [],
      post: false,
      comments: [],
      sort: '',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadPosts action correctly', () => {
    const expectedResult = {
      ...state,
      loading: true,
      error: false,
      posts: [],
    };
    expect(appReducer(state, loadPosts())).toEqual(expectedResult);
  });

  it('should handle the postsLoaded action correctly', () => {
    const fixture = [
      {
        title: 'My post',
      },
    ];
    const expectedResult = {
      ...state,
      loading: false,
      posts: fixture,
    };

    expect(appReducer(state, postsLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the postsLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };

    const expectedResult = {
      ...state,
      error: fixture,
      loading: false,
    };

    expect(appReducer(state, postsLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the loadPost action correctly', () => {
    const expectedResult = {
      ...state,
      loading: true,
      error: false,
      posts: [],
      post: false,
      comments: [],
    };
    expect(appReducer(state, loadPost())).toEqual(expectedResult);
  });

  it('should handle the postLoaded action correctly', () => {
    const postFixture = {
      title: 'title-fixture',
    };
    const commentsFixture = [
      {
        body: 'body-fixture',
      },
    ];
    const expectedResult = {
      ...state,
      loading: false,
      post: postFixture,
      comments: commentsFixture,
    };

    expect(appReducer(state, postLoaded(postFixture, commentsFixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the postLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };

    const expectedResult = {
      ...state,
      error: fixture,
      loading: false,
    };

    expect(appReducer(state, postLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
