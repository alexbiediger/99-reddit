/**
 * Test the PostPage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';

import PostPod from 'components/PostPod';
import PostPage from '../PostPage';
import { mapDispatchToProps } from '../index';

import { loadPost } from '../../App/actions';

describe('<PostPage />', () => {
  it('should render the post list', () => {
    const post = {};
    const renderedComponent = shallow(
      <PostPage loading error={false} post={post} />,
    );
    expect(
      renderedComponent.contains(<PostPod loading error={false} post={post} />),
    ).toEqual(true);
  });

  it('should render fetch the post on mount', () => {
    const submitSpy = jest.fn();
    mount(<PostPage fetchPost={submitSpy} match={{ url: '/' }} />);
    expect(submitSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('fetchPost', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.fetchPost).toBeDefined();
      });

      it('should dispatch loadPost when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.fetchPost();
        expect(dispatch).toHaveBeenCalledWith(loadPost());
      });
    });
  });
});
