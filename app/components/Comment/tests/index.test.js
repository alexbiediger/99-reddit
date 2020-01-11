/**
 * Test the repo list item
 */

import React from 'react';
import { render } from 'enzyme';

import Comment from '../Comment';

const renderComponent = (props = {}) => render(<Comment {...props} />);

describe.only('<Comment />', () => {
  let comment;

  // Before each test reset the comment data for safety
  beforeEach(() => {
    comment = {
      body: 'fixture-body',
      author: 'fixture-author',
      created_utc: 1578664094,
      score: 666,
      replies: false,
    };
  });

  it('should render the comments replies', () => {
    const child = { kind: 't1', data: { ...comment } };
    comment.replies = {
      data: { children: [child, child] },
    };

    const renderedComponent = renderComponent({ comment });
    expect(renderedComponent.find('.comments-list-item').length).toBe(2);
  });

  it('should render the comments score', () => {
    const renderedComponent = renderComponent({ comment });
    expect(renderedComponent.text()).toContain(comment.score);
  });

  it('should render the comments author', () => {
    const renderedComponent = renderComponent({ comment });
    expect(renderedComponent.text()).toContain(comment.author);
  });

  it('should render the comments created_utc', () => {
    const renderedComponent = renderComponent({ comment });
    expect(renderedComponent.text()).toContain(
      new Date(comment.created_utc * 1000).toString().split('(')[0],
    );
  });

  it('should render the comments body', () => {
    const renderedComponent = renderComponent({ comment });
    expect(renderedComponent.text()).toContain(comment.body);
  });
});
