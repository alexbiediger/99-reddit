import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import Comment from '../Comment';
import './style.scss';

const CommentsList = ({ loading, error, comments }) => {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error !== false) {
    return <div className="error">Something went wrong, please try again!</div>;
  }

  let content = <div></div>;

  if (comments && comments.length) {
    content = comments.map((comment) => (
      <Comment key={`item-${comment.data.name}`} comment={comment.data} />
    ));
  } else {
    content = <li>No comments!</li>;
  }

  return (
    <div className="posts-list-wrapper">
      <ul>{content}</ul>
    </div>
  );
};

CommentsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  comments: PropTypes.array,
};

export default CommentsList;
