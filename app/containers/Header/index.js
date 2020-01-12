import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectSort } from 'containers/App/selectors';
import { loadPosts } from '../App/actions';
import Header from './Header';

const mapDispatchToProps = (dispatch) => ({
  changeSort: (sort) => () => {
    dispatch(loadPosts(sort));
  },
});

const mapStateToProps = createStructuredSelector({
  sort: makeSelectSort(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Header);

export { mapDispatchToProps };
