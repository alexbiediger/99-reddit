import React from 'react';
import { render } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import PostList from '../index';

const renderComponent = (props = {}) => render(
  <Router>
    <PostList {...props} />
  </Router>,
);

describe.only('<PostList />', () => {
  let postListProps;

  // Before each test reset the post data for safety
  beforeEach(() => {
    postListProps = {
      posts: [
        {
          data: {
            title: 'fixture-title',
            permalink: 'fixture-permalink',
            thumbnail: 'fixture-thumbnail',
            url: 'fixture-url',
          },
        },
      ],
      loading: false,
      error: false,
    };
  });

  it('should render 1 post', () => {
    const renderedComponent = renderComponent({ ...postListProps });
    expect(renderedComponent.text()).toContain(
      postListProps.posts[0].data.title,
    );
  });

  it('should render loading', () => {
    postListProps = {
      ...postListProps,
      loading: true,
    };
    const renderedComponent = renderComponent({ ...postListProps });
    expect(renderedComponent.is('.loading-indicator')).toBe(true);
  });

  it('should render error', () => {
    postListProps = {
      ...postListProps,
      error: new Error('NetworkError when attempting to fetch resource.'),
    };
    const renderedComponent = renderComponent({ ...postListProps });
    expect(renderedComponent.is('.error')).toBe(true);
  });
});
