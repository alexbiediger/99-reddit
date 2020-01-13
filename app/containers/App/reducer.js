import {
  CHANGE_MODE,
  LOAD_POST_SUCCESS,
  LOAD_POST,
  LOAD_POST_ERROR,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS,
  LOAD_POSTS_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  mode: 'card',
  loading: false,
  error: false,
  sort: '',
  posts: [],
  after: false,
  post: false,
  resetPosts: false,
  comments: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MODE: {
      const newState = {
        ...state,
        mode: action.mode,
      };

      return newState;
    }

    case LOAD_POSTS: {
      const resetPosts = action.sort !== state.sort;

      const newState = {
        ...state,
        error: false,
        resetPosts,
        after: resetPosts ? false : state.after,
        sort: action.sort === undefined ? state.sort : action.sort,
      };

      return newState;
    }
    case LOAD_POSTS_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        posts: (state.resetPosts ? [] : state.posts).concat(action.posts),
        after: action.after,
      };
      return newState;
    }

    case LOAD_POSTS_ERROR: {
      return { ...state, error: action.error, loading: false };
    }
    case LOAD_POST: {
      const newState = {
        ...state,
        loading: true,
        error: false,
        post: false,
        comments: [],
      };

      return newState;
    }
    case LOAD_POST_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        post: action.post,
        comments: action.comments,
      };
      return newState;
    }

    case LOAD_POST_ERROR: {
      return { ...state, error: action.error, loading: false };
    }
    default:
      return state;
  }
}

export default appReducer;
