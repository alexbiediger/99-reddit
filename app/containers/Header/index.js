import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { loadPosts } from '../App/actions';

import Header from './Header';

const mapDispatchToProps = (dispatch) => ({
  changeSort: (sort) => () => {
    dispatch(loadPosts(sort));
  },
});

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Header);

export { mapDispatchToProps };
