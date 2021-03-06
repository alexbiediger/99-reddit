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

const makeSelectMode = () => createSelector(
  selectGlobal,
  (globalState) => globalState.mode,
);

const makeSelectSort = () => createSelector(
  selectGlobal,
  (globalState) => globalState.sort,
);

const makeSelectPosts = () => createSelector(
  selectGlobal,
  (globalState) => globalState.posts,
);

const makeSelectAfter = () => createSelector(
  selectGlobal,
  (globalState) => globalState.after || '',
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
  makeSelectMode,
  makeSelectSort,
  makeSelectPosts,
  makeSelectAfter,
  makeSelectPost,
  makeSelectComments,
  makeSelectLocation,
};
