import {
  LOAD_POST_SUCCESS,
  LOAD_POST,
  LOAD_POST_ERROR,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS,
  LOAD_POSTS_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  sort: '',
  posts: [],
  post: false,
  comments: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS: {
      const newState = {
        ...state,
        loading: true,
        error: false,
        posts: [],
      };

      return newState;
    }
    case LOAD_POSTS_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        posts: action.posts,
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
