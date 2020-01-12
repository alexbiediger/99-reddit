import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Post = ({ post }) => {
  const dateStr = new Date(post.data.created_utc * 1000)
    .toString()
    .split('(')[0];
  const formatK = (num) => (num > 1000 ? `${(num / 1000).toFixed(0)}k` : num);

  let thumbnail;
  if (post.data.thumbnail.includes('http')) {
    thumbnail = (
      <img
        className="post__thumbnail"
        src={post.data.thumbnail}
        alt="Post thumbnail"
      />
    );
  }

  let preview;
  if (post.data.preview && post.data.post_hint === 'image') {
    let previewUrl = post.data.preview.images[0].resolutions.slice(-1)[0].url;
    previewUrl = previewUrl.replace(/&amp;/g, '&');
    preview = (
      <img className="post__preview" src={previewUrl} alt="Post preview" />
    );
  }

  if (post.data.media && post.data.post_hint === 'hosted:video') {
    preview = (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video controls className="post__preview">
        <source src={post.data.media.reddit_video.fallback_url} />
        Sorry, your browser doesn&#39;t support embedded videos.
      </video>
    );
  }

  const postHint = (post.data.post_hint || '').replace(':', '-');

  const urlLabel = post.data.url.replace(/https?:\/\/(www.)?/, '');
  return (
    <div className={`post post_hint-${postHint}`}>
      <aside className="post__aside">
        <b className="post__subreddit">r/{post.data.subreddit}</b> • Posted by
        {post.data.author} {dateStr}
      </aside>
      <div className="post__posted-by"></div>
      {thumbnail}
      <div className="post__title">{post.data.title}</div>
      <div className="post__body">{post.data.selftext}</div>
      <a className="post__link" href={post.data.url}>
        {urlLabel}
      </a>
      {preview}
      <div className="post__upvotes">{formatK(post.data.score)}</div>
      <div className="post__num-comments">
        {formatK(post.data.num_comments)}
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
