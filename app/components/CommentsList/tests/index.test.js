import React from 'react';
import { render } from 'enzyme';

import CommentsList from '../index';

const renderComponent = (props = {}) => render(<CommentsList {...props} />);

describe.only('<CommentsList />', () => {
  let commentsListProps;

  // Before each test reset the post data for safety
  beforeEach(() => {
    commentsListProps = {
      comments: [
        { data: { body: 'fixture-body' } },
        { data: { body: 'fixture-body' } },
      ],
      loading: false,
      error: false,
    };
  });

  it('should render 1 post', () => {
    const renderedComponent = renderComponent({ ...commentsListProps });
    expect(renderedComponent.text()).toContain(
      commentsListProps.comments[0].data.body,
    );
  });

  it('should render loading', () => {
    commentsListProps = {
      ...commentsListProps,
      loading: true,
    };
    const renderedComponent = renderComponent({ ...commentsListProps });
    expect(renderedComponent.is('.loading-indicator')).toBe(true);
  });

  it('should render error', () => {
    commentsListProps = {
      ...commentsListProps,
      error: new Error('NetworkError when attempting to fetch resource.'),
    };
    const renderedComponent = renderComponent({ ...commentsListProps });
    expect(renderedComponent.is('.error')).toBe(true);
  });

  it('should render no comments', () => {
    commentsListProps = {
      ...commentsListProps,
      comments: [],
    };
    const renderedComponent = renderComponent({ ...commentsListProps });
    expect(renderedComponent.text()).toContain('No comments');
  });
});
