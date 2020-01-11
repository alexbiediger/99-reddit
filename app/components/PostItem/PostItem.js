import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Post from 'components/Post';

import './style.scss';

const PostItem = ({ post }) => (
  <li className="post-item">
    <Link className="posts-list-item" to={post.data.permalink}>
      <Post post={post} />
    </Link>
  </li>
);

PostItem.propTypes = {
  post: PropTypes.object,
};

export default PostItem;
