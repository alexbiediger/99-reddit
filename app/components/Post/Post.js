import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Post = ({ post }) => {
  const dateStr = new Date(post.data.created_utc * 1000)
    .toString()
    .split('(')[0];

  return (
    <div className="post">
      <div className="post__title">{post.data.title}</div>
      <div className="post__upvotes">{post.data.score}</div>
      <div className="post__posted-by">{post.data.author}</div>
      <div className="post__date">{dateStr}</div>
      <div className="post__num-comments">{post.data.num_comments}</div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
