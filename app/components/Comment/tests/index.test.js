/**
 * Test the repo list item
 */

import React from 'react';
import { render, shallow } from 'enzyme';

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
      replies: {
        data: {
          children: [
            {
              data: {
                body: 'fixture-body-child1',
                author: 'fixture-author-child1',
                created_utc: 1578664095,
                score: 1337,
                replies: false,
              },
            },
          ],
        },
      },
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
    let renderedComponent = renderComponent({ comment });
    expect(renderedComponent.text()).toContain(comment.score);
    renderedComponent = renderComponent({
      comment: { ...comment, score: 1337 },
    });
    expect(renderedComponent.text()).toContain(`${(1337 / 1000).toFixed(0)}k`);
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

  it("should hide comment's replies with btn click", () => {
    const component = shallow(<Comment {...{ comment }} />);

    component
      .find('.comments-list-item__hide-btn')
      .first()
      .prop('onClick')();
    expect(component.find('.comments-list-item').hasClass('hide')).toBe(true);

    component
      .find('.comments-list-item__show-btn')
      .first()
      .prop('onClick')();
    expect(component.find('.comments-list-item').hasClass('hide')).toBe(false);
  });
});
