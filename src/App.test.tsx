import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

// Random line added on request.
describe('App', () => {
  it('renders the tweet viewer with sample tweets', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Tweet Viewer' })).toBeInTheDocument();
    expect(screen.getAllByRole('article').length).toBeGreaterThan(0);
  });
});
