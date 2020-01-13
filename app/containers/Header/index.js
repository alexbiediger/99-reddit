import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectSort, makeSelectMode } from 'containers/App/selectors';
import { loadPosts, changeMode } from '../App/actions';
import Header from './Header';

const mapDispatchToProps = (dispatch) => ({
  changeSort: (sort) => () => {
    dispatch(loadPosts(sort));
  },
  changeMode: (mode) => () => {
    dispatch(changeMode(mode));
  },
});

const mapStateToProps = createStructuredSelector({
  sort: makeSelectSort(),
  mode: makeSelectMode(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Header);

export { mapDispatchToProps };
