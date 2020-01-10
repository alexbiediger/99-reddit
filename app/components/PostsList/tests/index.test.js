import React from 'react';
import { render } from 'enzyme';

import PostList from '../index';

const renderComponent = (props = {}) => render(<PostList {...props} />);

describe.only('<PostList />', () => {
  let postListProps;

  // Before each test reset the post data for safety
  beforeEach(() => {
    postListProps = {
      posts: [{ data: { title: 'fixture-title' } }],
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

  it('should render no posts', () => {
    postListProps = {
      ...postListProps,
      posts: [],
    };
    const renderedComponent = renderComponent({ ...postListProps });
    expect(renderedComponent.text()).toContain('No posts');
  });
});
