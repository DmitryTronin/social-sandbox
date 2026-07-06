import { useState } from 'react';
import { Tweet } from './components/Tweet';
import type { TweetData } from '@/types/tweet';

const sampleTweets: TweetData[] = [
  {
    id: '1',
    text: 'Hello world! This is a sample tweet.',
    author: { name: 'John Doe', handle: 'johndoe', avatarUrl: '/avatars/avatar-1.svg' },
    createdAt: '2024-01-15T10:30:00Z',
    likes: 42,
    retweets: 10,
    replies: 5,
  },
  {
    id: '2',
    text: 'Just shipped a new feature! Feeling great about the team effort.',
    author: { name: 'Jane Smith', handle: 'janesmith', avatarUrl: '/avatars/avatar-2.svg' },
    createdAt: '2024-01-15T11:00:00Z',
    likes: 128,
    retweets: 34,
    replies: 12,
  },
  {
    id: '3',
    text: 'React + TypeScript is such a powerful combo. Love the type safety!',
    author: { name: 'Alex Chen', handle: 'alexcodes', avatarUrl: '/avatars/avatar-3.svg' },
    createdAt: '2024-01-15T12:15:00Z',
    likes: 89,
    retweets: 21,
    replies: 7,
  },
  {
    id: '4',
    text: 'Hot take: tabs > spaces. Fight me.',
    author: { name: 'Sam Rivera', handle: 'samdev', avatarUrl: '/avatars/avatar-4.svg' },
    createdAt: '2024-01-15T13:45:00Z',
    likes: 256,
    retweets: 67,
    replies: 43,
  },
  {
    id: '5',
    text: 'Morning coffee + code review = perfect start to the day.',
    author: { name: 'Morgan Lee', handle: 'morganlee', avatarUrl: '/avatars/avatar-5.svg' },
    createdAt: '2024-01-16T08:00:00Z',
    likes: 73,
    retweets: 8,
    replies: 3,
  },
];

function App() {
  const [tweets, setTweets] = useState(sampleTweets);

  const toggleLike = (id: string) => {
    setTweets((prev) =>
      prev.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              likedByMe: !tweet.likedByMe,
              likes: tweet.likes + (tweet.likedByMe ? -1 : 1),
            }
          : tweet,
      ),
    );
  };

  const toggleRetweet = (id: string) => {
    setTweets((prev) =>
      prev.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              retweetedByMe: !tweet.retweetedByMe,
              retweets: tweet.retweets + (tweet.retweetedByMe ? -1 : 1),
            }
          : tweet,
      ),
    );
  };

  return (
    <div className="app">
      <h1>Tweet Viewer</h1>
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet}
          onLike={toggleLike}
          onRetweet={toggleRetweet}
        />
      ))}
    </div>
  );
}

export default App;
