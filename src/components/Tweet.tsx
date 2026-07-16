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
  const postedAt = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
  }).format(new Date(tweet.createdAt));

  return (
    <article className="tweet">
      <img
        src={tweet.author.avatarUrl}
        alt={tweet.author.name}
        className="avatar"
      />
      <div className="tweet-body">
        <div className="tweet-header">
          <span className="name">{tweet.author.name}</span>
          <span className="handle">@{tweet.author.handle}</span>
          <span className="separator" aria-hidden="true">·</span>
          <time className="timestamp" dateTime={tweet.createdAt}>{postedAt}</time>
        </div>
        <p className="tweet-text">{tweet.text}</p>
        <div className="tweet-actions">
          <button className="action-button reply" onClick={() => onReply?.(tweet.id)}>
            <span className="action-icon" aria-hidden="true">◌</span>
            Reply ({tweet.replies})
          </button>
          <button
            className={`action-button retweet${tweet.retweetedByMe ? ' is-active' : ''}`}
            onClick={() => onRetweet?.(tweet.id)}
            aria-pressed={!!tweet.retweetedByMe}
          >
            <span className="action-icon" aria-hidden="true">↻</span>
            {tweet.retweetedByMe ? 'Retweeted' : 'Retweet'} ({tweet.retweets})
          </button>
          <button
            className={`action-button like${tweet.likedByMe ? ' is-active' : ''}`}
            onClick={() => onLike?.(tweet.id)}
            aria-pressed={!!tweet.likedByMe}
          >
            <span className="action-icon" aria-hidden="true">♥</span>
            {tweet.likedByMe ? 'Liked' : 'Like'} ({tweet.likes})
          </button>
        </div>
      </div>
    </article>
  );
};

export default Tweet;
