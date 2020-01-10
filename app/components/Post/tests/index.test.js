/**
 * Test the repo list item
 */

import React from 'react';
import { render } from 'enzyme';

import Post from '../Post';

const renderComponent = (props = {}) => render(<Post {...props} />);

describe.only('<Post />', () => {
  let post;

  // Before each test reset the post data for safety
  beforeEach(() => {
    post = {
      kind: 't3',
      data: {
        title: 'fixture-title',
        score: 1337,
        author: 'fixture-author',
        created_utc: 1578664094,
        num_comments: 666,
      },
    };
  });

  it('should render the posts title', () => {
    const renderedComponent = renderComponent({ post });
    expect(renderedComponent.text()).toContain(post.data.title);
  });

  it('should render the posts score', () => {
    const renderedComponent = renderComponent({ post });
    expect(renderedComponent.text()).toContain(post.data.score);
  });

  it('should render the posts author', () => {
    const renderedComponent = renderComponent({ post });
    expect(renderedComponent.text()).toContain(post.data.author);
  });

  it('should render the posts created_utc', () => {
    const renderedComponent = renderComponent({ post });
    expect(renderedComponent.text()).toContain(
      new Date(post.data.created_utc * 1000).toString().split('(')[0],
    );
  });

  it('should render the posts num_comments', () => {
    const renderedComponent = renderComponent({ post });
    expect(renderedComponent.text()).toContain(post.data.num_comments);
  });
});
