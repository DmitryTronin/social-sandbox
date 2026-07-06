import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Tweet } from './Tweet';
import type { TweetData } from '@/types/tweet';

const tweet: TweetData = {
  id: 'tweet-1',
  text: 'Testing makes UI behavior explicit.',
  author: {
    name: 'Ada Lovelace',
    handle: 'ada',
    avatarUrl: '/avatars/avatar-1.svg',
  },
  createdAt: '2024-01-15T10:30:00Z',
  likes: 42,
  retweets: 10,
  replies: 5,
};

describe('Tweet', () => {
  it('renders tweet content and action counts', () => {
    render(<Tweet tweet={tweet} />);

    expect(screen.getByText('Ada Lovelace')).toBeInTheDocument();
    expect(screen.getByText('@ada')).toBeInTheDocument();
    expect(screen.getByText('Testing makes UI behavior explicit.')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Ada Lovelace' })).toHaveAttribute(
      'src',
      '/avatars/avatar-1.svg',
    );
    expect(screen.getByRole('button', { name: 'Reply (5)' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Retweet (10)' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Like (42)' })).toBeInTheDocument();
  });

  it('calls action handlers with the tweet id', async () => {
    const user = userEvent.setup();
    const onReply = vi.fn();
    const onRetweet = vi.fn();
    const onLike = vi.fn();

    render(
      <Tweet
        tweet={tweet}
        onReply={onReply}
        onRetweet={onRetweet}
        onLike={onLike}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Reply (5)' }));
    await user.click(screen.getByRole('button', { name: 'Retweet (10)' }));
    await user.click(screen.getByRole('button', { name: 'Like (42)' }));

    expect(onReply).toHaveBeenCalledWith('tweet-1');
    expect(onRetweet).toHaveBeenCalledWith('tweet-1');
    expect(onLike).toHaveBeenCalledWith('tweet-1');
  });

  it('shows active state when liked and retweeted by me', () => {
    render(<Tweet tweet={{ ...tweet, likedByMe: true, retweetedByMe: true }} />);

    expect(screen.getByRole('button', { name: 'Liked (42)' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'Retweeted (10)' })).toHaveAttribute('aria-pressed', 'true');
  });

  it('does not require action handlers', async () => {
    const user = userEvent.setup();

    render(<Tweet tweet={tweet} />);

    await user.click(screen.getByRole('button', { name: 'Like (42)' }));
  });
});
