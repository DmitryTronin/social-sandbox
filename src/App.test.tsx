import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the tweet viewer with sample tweets', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Tweet Viewer' })).toBeInTheDocument();
    expect(screen.getAllByRole('article').length).toBeGreaterThan(0);
  });

  it('toggles a like on and off with live counts', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Like (42)' }));
    expect(screen.getByRole('button', { name: 'Liked (43)' })).toHaveAttribute('aria-pressed', 'true');

    await user.click(screen.getByRole('button', { name: 'Liked (43)' }));
    expect(screen.getByRole('button', { name: 'Like (42)' })).toHaveAttribute('aria-pressed', 'false');
  });

  it('toggles a retweet on and off with live counts', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Retweet (10)' }));
    expect(screen.getByRole('button', { name: 'Retweeted (11)' })).toHaveAttribute('aria-pressed', 'true');

    await user.click(screen.getByRole('button', { name: 'Retweeted (11)' }));
    expect(screen.getByRole('button', { name: 'Retweet (10)' })).toHaveAttribute('aria-pressed', 'false');
  });

  it('only affects the clicked tweet', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Like (42)' }));

    expect(screen.getByRole('button', { name: 'Like (128)' })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /^Liked/ })).toHaveLength(1);
  });
});
