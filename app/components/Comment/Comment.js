import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Comment = ({ comment }) => {
  let replies = false;
  if (comment.replies) {
    replies = comment.replies.data.children.map(
      (child) => child.kind === 't1' && (
        <Comment key={`item-${child.data.name}`} comment={child.data} />
      ),
    );
    replies = <ul>{replies}</ul>;
  }

  const dateStr = new Date(comment.created_utc * 1000).toString().split('(')[0];

  return (
    <li className="comments-list-item" to={comment.permalink}>
      <div className="comments-list-item__body">{comment.body}</div>
      <div className="comments-list-item__upvotes">{comment.score}</div>
      <div className="comments-list-item__posted-by">{comment.author}</div>
      <div className="comments-list-item__date">{dateStr}</div>
      {replies}
    </li>
  );
};

Comment.propTypes = {
  comment: PropTypes.any,
};

export default Comment;
