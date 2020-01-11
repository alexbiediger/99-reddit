import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectPost,
  makeSelectComments,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadPost } from '../App/actions';
import saga from './saga';
import PostPage from './PostPage';

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (url) => {
    dispatch(loadPost(url));
  },
});

const mapStateToProps = createStructuredSelector({
  post: makeSelectPost(),
  comments: makeSelectComments(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'post', saga });

export default compose(
  withSaga,
  withConnect,
)(PostPage);

export { mapDispatchToProps };
