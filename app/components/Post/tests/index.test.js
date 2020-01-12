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
        thumbnail: 'http://example.com/fixture-thumbnail.jpg',
        url: 'http://example.com/fixture-url',
        preview: {
          images: [
            {
              resolutions: [{ url: 'http://example.com/fixture-resolution' }],
            },
          ],
        },
        media: {
          reddit_video: {
            fallback_url: 'http://example.com/fixture-media.mpg',
          },
        },
      },
    };
  });

  it('should render the post title', () => {
    const renderedComponent = renderComponent({ post });
    expect(renderedComponent.text()).toContain(post.data.title);
  });

  it('should render the post score', () => {
    const renderedComponent = renderComponent({ post });
    expect(renderedComponent.text()).toContain('1k');
  });

  it('should render the post author', () => {
    const renderedComponent = renderComponent({ post });
    expect(renderedComponent.text()).toContain(post.data.author);
  });

  it('should render the post created_utc', () => {
    const renderedComponent = renderComponent({ post });
    expect(renderedComponent.text()).toContain(
      new Date(post.data.created_utc * 1000).toString().split('(')[0],
    );
  });

  it('should render the post num_comments', () => {
    const renderedComponent = renderComponent({ post });
    expect(renderedComponent.text()).toContain(post.data.num_comments);
  });

  it('should render the post thumbnail', () => {
    const renderedComponent = renderComponent({ post });
    expect(renderedComponent.find('.post__thumbnail').prop('src')).toBe(
      post.data.thumbnail,
    );
  });

  it('should render the post preview url', () => {
    post.data.post_hint = 'image';
    const renderedComponent = renderComponent({ post });
    expect(renderedComponent.find('.post__preview').prop('src')).toBe(
      post.data.preview.images[0].resolutions.slice(-1)[0].url,
    );
  });

  it('should render the posts preview video', () => {
    post.data.post_hint = 'hosted:video';
    const renderedComponent = renderComponent({ post });
    expect(renderedComponent.find('.post__preview source').prop('src')).toBe(
      post.data.media.reddit_video.fallback_url,
    );
  });
});
