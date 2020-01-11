/**
 * Test the ListPage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';

import PostsList from 'components/PostsList';
import ListPage from '../ListPage';
import { mapDispatchToProps } from '../index';

import { loadPosts } from '../../App/actions';

describe('<ListPage />', () => {
  it('should render the posts list', () => {
    const renderedComponent = shallow(
      <ListPage loading error={false} posts={[{}]} />,
    );
    expect(
      renderedComponent.contains(
        <PostsList loading error={false} posts={[{}]} />,
      ),
    ).toEqual(true);
  });

  it('should render fetch the posts on mount', () => {
    const submitSpy = jest.fn();
    mount(<ListPage fetchPosts={submitSpy} />);
    expect(submitSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('fetchPosts', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.fetchPosts).toBeDefined();
      });

      it('should dispatch loadPosts when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.fetchPosts();
        expect(dispatch).toHaveBeenCalledWith(loadPosts());
      });
    });
  });
});
