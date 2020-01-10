import React from 'react';
import PropTypes from 'prop-types';

import PostItem from 'components/PostItem';

import './style.scss';

const PostsList = () => {
  return (
    <div className="list-wrapper">
      <ul>
        <PostItem />
      </ul>
    </div>
  );
};

PostsList.propTypes = {
};

export default PostsList;
