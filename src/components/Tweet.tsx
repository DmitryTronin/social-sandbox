import React from 'react';
import type { TweetData } from '@/types/tweet';

interface TweetProps {
  tweet: TweetData;
  onLike?: (id: string) => void;
  onRetweet?: (id: string) => void;
  onReply?: (id: string) => void;
}

export const Tweet: React.FC<TweetProps> = ({
  tweet,
  onLike,
  onRetweet,
  onReply,
}) => {
  return (
    <article className="tweet">
      <img
        src={tweet.author.avatarUrl}
        alt={tweet.author.name}
        className="avatar"
      />
      <div className="tweet-content">
        <div className="tweet-header">
          <span className="name">{tweet.author.name}</span>
          <span className="handle">@{tweet.author.handle}</span>
          <span className="dot" aria-hidden="true">·</span>
          <time dateTime={tweet.createdAt}>Jan 15</time>
          <button className="tweet-more" type="button" aria-label="More options">•••</button>
        </div>
        <p className="tweet-text">{tweet.text}</p>
        <div className="tweet-actions">
          <button onClick={() => onReply?.(tweet.id)}>
            <span aria-hidden="true">◌</span>
            Reply ({tweet.replies})
          </button>
          <button
            onClick={() => onRetweet?.(tweet.id)}
            aria-pressed={!!tweet.retweetedByMe}
            className={tweet.retweetedByMe ? 'action-retweeted' : ''}
          >
            <span aria-hidden="true">↻</span>
            {tweet.retweetedByMe ? 'Retweeted' : 'Retweet'} ({tweet.retweets})
          </button>
          <button
            onClick={() => onLike?.(tweet.id)}
            aria-pressed={!!tweet.likedByMe}
            className={tweet.likedByMe ? 'action-liked' : ''}
          >
            <span aria-hidden="true">♡</span>
            {tweet.likedByMe ? 'Liked' : 'Like'} ({tweet.likes})
          </button>
        </div>
      </div>
    </article>
  );
};

export default Tweet;
