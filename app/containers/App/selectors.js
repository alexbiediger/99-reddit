import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = (state) => state.global || initialState;

const selectRoute = (state) => state.router;

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loading,
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.error,
);

const makeSelectPosts = () => createSelector(
  selectGlobal,
  (globalState) => globalState.posts,
);

const makeSelectPost = () => createSelector(
  selectGlobal,
  (globalState) => globalState.post,
);

const makeSelectComments = () => createSelector(
  selectGlobal,
  (globalState) => globalState.comments,
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.location,
);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectPosts,
  makeSelectPost,
  makeSelectComments,
  makeSelectLocation,
};
