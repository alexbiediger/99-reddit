/*
 * ListPage
 *
 * List all the posts
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import InfiniteScroll from 'react-infinite-scroller';

import LoadingIndicator from 'components/LoadingIndicator';
import PostsList from 'components/PostsList';

import './style.scss';

export default class ListPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    const {
      error, posts, match, fetchPosts
    } = this.props;

    const loadMore = () => fetchPosts(match.params.sort);

    const postsListProps = {
      error,
      posts,
      loadMore,
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
            <InfiniteScroll
              loadMore={loadMore}
              pageStart={0}
              hasMore
              loader={<LoadingIndicator key={0} />}
            >
              <PostsList {...postsListProps} />
            </InfiniteScroll>
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
