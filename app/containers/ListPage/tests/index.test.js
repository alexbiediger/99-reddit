/**
 * Test the ListPage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';

import InfiniteScroll from 'react-infinite-scroller';

import ListPage from '../ListPage';
import { mapDispatchToProps } from '../index';

import { loadPosts } from '../../App/actions';

describe('<ListPage />', () => {
  it('should render the posts list', () => {
    const renderedComponent = shallow(
      <ListPage loading error={false} posts={[{}]} match={{ params: {} }} />,
    );
    expect(renderedComponent.find(InfiniteScroll).length).toEqual(1);
  });

  it('should render fetch the posts on mount', () => {
    const submitSpy = jest.fn();
    const mountedComponent = mount(
      <ListPage fetchPosts={submitSpy} match={{ params: { sort: 'new' } }} />,
    );
    mountedComponent
      .find(InfiniteScroll)
      .instance()
      .props.loadMore();
    expect(submitSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('fetchPosts', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.fetchPosts).toBeDefined();
      });

      it('should dispatch sorted loadPosts when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.fetchPosts('new');
        expect(dispatch).toHaveBeenCalledWith(loadPosts('new'));
      });

      it('should dispatch loadPosts when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.fetchPosts();
        expect(dispatch).toHaveBeenCalledWith(loadPosts(''));
      });
    });
  });
});
