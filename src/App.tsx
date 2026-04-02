import React from 'react';
import { Tweet } from './components/Tweet';
import type { TweetData } from '@/types/tweet';

const sampleTweet: TweetData = {
  id: '1',
  text: 'Hello world! This is a sample tweet.',
  author: {
    name: 'John Doe',
    handle: 'johndoe',
    avatarUrl: 'https://example.com/avatar.png',
  },
  createdAt: '2024-01-15T10:30:00Z',
  likes: 42,
  retweets: 10,
  replies: 5,
};

function App() {
  return (
    <div className="app">
      <h1>Tweet Viewer</h1>
      <Tweet tweet={sampleTweet} />
    </div>
  );
}

export default App;
