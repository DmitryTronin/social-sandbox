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
    <div className="app-shell">
      <aside className="sidebar" aria-label="Primary navigation">
        <div className="brand-mark" aria-hidden="true">✦</div>
        <nav className="nav-links">
          <a className="nav-link nav-link-active" href="#feed" aria-current="page">
            <span aria-hidden="true">⌂</span> Home
          </a>
          <a className="nav-link" href="#explore"><span aria-hidden="true">⌕</span> Explore</a>
          <a className="nav-link" href="#notifications"><span aria-hidden="true">♡</span> Notifications</a>
          <a className="nav-link" href="#bookmarks"><span aria-hidden="true">▱</span> Bookmarks</a>
        </nav>
        <div className="sidebar-profile">
          <img src="/avatars/avatar-6.svg" alt="Your profile" />
          <div><strong>Alex Morgan</strong><span>@alexmorgan</span></div>
          <span className="more" aria-hidden="true">•••</span>
        </div>
      </aside>

      <main className="feed" id="feed">
        <header className="feed-header">
          <div>
            <p className="eyebrow">Your daily dose of ideas</p>
            <h1>Tweet Viewer</h1>
          </div>
          <button className="compose-button" type="button">Compose <span aria-hidden="true">↗</span></button>
        </header>
        <div className="feed-tabs" role="tablist" aria-label="Feed filters">
          <button className="feed-tab feed-tab-active" role="tab" aria-selected="true">For you</button>
          <button className="feed-tab" role="tab" aria-selected="false">Following</button>
        </div>
        <section aria-label="Tweets">
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} onLike={toggleLike} onRetweet={toggleRetweet} />
          ))}
        </section>
      </main>

      <aside className="right-rail" aria-label="Discover">
        <div className="search-box"><span aria-hidden="true">⌕</span><input aria-label="Search" placeholder="Search" /></div>
        <section className="rail-card">
          <p className="eyebrow">Trending now</p>
          <h2>What’s happening</h2>
          <div className="trend"><span>Technology · Trending</span><strong>React</strong><small>18.2K posts</small></div>
          <div className="trend"><span>Design · Trending</span><strong>Quiet interfaces</strong><small>4,891 posts</small></div>
          <div className="trend"><span>Culture · Trending</span><strong>Slow mornings</strong><small>2,104 posts</small></div>
          <a className="show-more" href="#trends">Show more</a>
        </section>
        <p className="footer-note">Made for thoughtful conversations<br />© 2024 Social Sandbox</p>
      </aside>
    </div>
  );
}

export default App;
