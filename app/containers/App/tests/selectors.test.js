import {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectPosts,
  makeSelectPost,
  makeSelectComments,
  makeSelectLocation,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = {};
    const mockedState = {
      global: globalState,
    };
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = {
      global: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = {
      global: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectPosts', () => {
  const postsSelector = makeSelectPosts();
  it('should select the posts', () => {
    const posts = [{ title: 'my post' }];
    const mockedState = {
      global: {
        posts,
      },
    };
    expect(postsSelector(mockedState)).toEqual(posts);
  });
});

describe('makeSelectPost', () => {
  const postsSelector = makeSelectPost();
  it('should select the post', () => {
    const post = { title: 'my post' };
    const mockedState = {
      global: {
        post,
      },
    };
    expect(postsSelector(mockedState)).toEqual(post);
  });
});

describe('makeSelectComments', () => {
  const postsSelector = makeSelectComments();
  it('should select the comments', () => {
    const comments = [{ title: 'my post' }];
    const mockedState = {
      global: {
        comments,
      },
    };
    expect(postsSelector(mockedState)).toEqual(comments);
  });
});

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation();
  it('should select the location', () => {
    const router = {
      location: { pathname: '/foo' },
    };
    const mockedState = {
      router,
    };
    expect(locationStateSelector(mockedState)).toEqual(router.location);
  });
});
