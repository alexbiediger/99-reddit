import React from 'react';
import PropTypes from 'prop-types';

import PostItem from 'components/PostItem';
import LoadingIndicator from 'components/LoadingIndicator';

import './style.scss';

const PostsList = ({ loading, error, posts }) => {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error !== false) {
    return <div className="error">Something went wrong, please try again!</div>;
  }

  let content = <div></div>;

  // If we have posts, render them
  if (posts && posts.length) {
    content = posts.map((post) => (
      <PostItem key={`post-${post.data.name}`} post={post} />
    ));
  } else {
    // Otherwise render a single component
    content = <li>No posts!</li>;
  }

  return (
    <div className="list-wrapper">
      <ul>{content}</ul>
    </div>
  );
};

PostsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  posts: PropTypes.array,
};

export default PostsList;
