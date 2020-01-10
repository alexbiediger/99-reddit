import appReducer from '../reducer';
import { loadPosts, postsLoaded, postsLoadingError } from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      posts: [],
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

    expect(appReducer(state, postsLoaded(fixture))).toEqual(
      expectedResult,
    );
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
});
