import React from 'react';
import { render } from 'enzyme';

import PostPod from '../index';

const renderComponent = (props = {}) => render(<PostPod {...props} />);

describe.only('<PostPod />', () => {
  let postListProps;

  // Before each test reset the post data for safety
  beforeEach(() => {
    postListProps = {
      post: {},
      loading: false,
      error: false,
    };
  });

  it('should render 1 post', () => {
    postListProps.post = {
      kind: 't3',
      data: {
        title: 'fixture-title',
        score: 1337,
        author: 'fixture-author',
        created_utc: 1578664094,
        num_comments: 666,
      },
    };
    const renderedComponent = renderComponent({ ...postListProps });
    expect(renderedComponent.text()).toContain(postListProps.post.data.title);
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
