import React from 'react';
import PropTypes from 'prop-types';

import Post from 'components/Post';

import './style.scss';

const PostItem = () => {
  return (
    <li>
      <Post />
    </li>
  );
};

PostItem.propTypes = {
};

export default PostItem;
