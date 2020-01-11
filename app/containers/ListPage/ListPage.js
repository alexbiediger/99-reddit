/*
 * ListPage
 *
 * List all the posts
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import PostsList from 'components/PostsList';

import './style.scss';

export default class ListPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { fetchPosts, posts, match } = this.props;
    if (!posts || !posts.length) {
      fetchPosts(match.params.sort);
    }
  }

  render() {
    const { loading, error, posts } = this.props;
    const postsListProps = {
      loading,
      error,
      posts,
    };

    return (
      <div>
        <Helmet>
          <title>Frontpage</title>
          <meta name="description" content="A reddit clone ListPage" />
        </Helmet>
        <div className="list-page">
          <section className="centered">
            <h2>Weclome to reddit</h2>
          </section>
          <section className="centered">
            <PostsList {...postsListProps} />
          </section>
        </div>
      </div>
    );
  }
}

ListPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  posts: PropTypes.array,
  match: PropTypes.object,
  fetchPosts: PropTypes.func,
};
