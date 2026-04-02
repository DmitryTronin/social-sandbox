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
      <div className="tweet-header">
        <img
          src={tweet.author.avatarUrl}
          alt={tweet.author.name}
          className="avatar"
        />
        <div className="author-info">
          <span className="name">{tweet.author.name}</span>
          <span className="handle">@{tweet.author.handle}</span>
        </div>
      </div>
      <p className="tweet-text">{tweet.text}</p>
      <div className="tweet-actions">
        <button onClick={() => onReply?.(tweet.id)}>
          Reply ({tweet.replies})
        </button>
        <button onClick={() => onRetweet?.(tweet.id)}>
          Retweet ({tweet.retweets})
        </button>
        <button onClick={() => onLike?.(tweet.id)}>
          Like ({tweet.likes})
        </button>
      </div>
      <time className="timestamp">{tweet.createdAt}</time>
    </article>
  );
};

export default Tweet;
