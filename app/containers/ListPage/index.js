import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import { makeSelectPosts, makeSelectError } from 'containers/App/selectors';
import { loadPosts } from '../App/actions';
import saga from './saga';
import ListPage from './ListPage';

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (sort = '') => dispatch(loadPosts(sort)),
});

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'list-page', saga });

export default compose(
  withSaga,
  withConnect,
)(ListPage);
export { mapDispatchToProps };
