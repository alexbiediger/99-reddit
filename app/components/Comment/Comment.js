import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Comment = ({ comment }) => {
  let replies = false;
  const [hideReplies, setHideReplies] = useState(false);

  const toggleReplies = () => {
    setHideReplies(!hideReplies);
  };

  if (comment.replies) {
    replies = comment.replies.data.children.map(
      (child) => child.kind === 't1' && (
        <Comment key={`item-${child.data.name}`} comment={child.data} />
      ),
    );
    replies = (
      <div className="comments-list-item__replies">
        <button
          className="comments-list-item__hide-btn"
          type="button"
          onClick={toggleReplies}
        >
        </button>
        <ul>{replies}</ul>
      </div>
    );
  }
  const formatK = (num) => (num > 1000 ? `${(num / 1000).toFixed(0)}k` : num);

  const dateStr = new Date(comment.created_utc * 1000).toString().split('(')[0];

  return (
    <li
      className={`comments-list-item ${hideReplies ? 'hide' : ''}`}
      to={comment.permalink}
    >
      <button
        className="comments-list-item__show-btn"
        type="button"
        onClick={toggleReplies}
      >
      </button>
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
