import React from 'react';
import PropTypes from 'prop-types';

import Post from 'components/Post';
import CommentsList from 'components/CommentsList';
import LoadingIndicator from 'components/LoadingIndicator';

import './style.scss';

const PostPod = ({
  loading, error, post, comments
}) => {
  if (error !== false) {
    return <div className="error">Something went wrong, please try again!</div>;
  }

  if (loading || !post) {
    return <LoadingIndicator />;
  }

  const postProps = { loading, error, post };
  const commentsListProps = { loading, error, comments };

  return (
    <div className="pod-wrapper">
      <Post {...postProps} />
      <CommentsList {...commentsListProps} />
    </div>
  );
};

PostPod.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  comments: PropTypes.array,
  post: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default PostPod;
