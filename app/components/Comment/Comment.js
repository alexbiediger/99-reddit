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
  const formatK = (num) => (num > 1000 ? `${(num / 1000).toFixed(0)}k` : num);

  const dateStr = new Date(comment.created_utc * 1000).toString().split('(')[0];

  return (
    <li className="comments-list-item" to={comment.permalink}>
      <aside className="comments-list-item__aside">
        <span className="comments-list-item__posted-by">{comment.author}</span>{' '}
        ·{' '}
        <span className="comments-list-item__upvotes">
          {formatK(comment.score)} points
        </span>{' '}
        · <span className="comments-list-item__date">{dateStr}</span>
      </aside>
      <div className="comments-list-item__body">{comment.body}</div>
      {replies}
    </li>
  );
};

Comment.propTypes = {
  comment: PropTypes.any,
};

export default Comment;
