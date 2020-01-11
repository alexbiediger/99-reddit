/*
 * PostPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PostPod from 'components/PostPod';
import './style.scss';

export default class PostPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { fetchPost, match } = this.props;
    if (match && match.url) {
      fetchPost(match.url);
    }
  }

  render() {
    const {
      loading, error, post, comments
    } = this.props;
    const postPodProps = {
      loading,
      error,
      post,
      comments,
    };

    return (
      <article>
        <Helmet>
          <title>Postpage</title>
          <meta name="description" content="A reddit clone" />
        </Helmet>
        <div className="post-page">
          <PostPod {...postPodProps} />
        </div>
      </article>
    );
  }
}

PostPage.propTypes = {
  match: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  post: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  comments: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  fetchPost: PropTypes.func,
};
