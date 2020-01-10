import React from 'react';
import PropTypes from 'prop-types';

import Post from 'components/Post';

import './style.scss';

const PostItem = ({ post }) => (
  <li className="post-item">
    <Post post={post} />
  </li>
);

PostItem.propTypes = {
  post: PropTypes.object,
};

export default PostItem;
