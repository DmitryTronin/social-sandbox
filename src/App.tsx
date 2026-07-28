import { useState } from 'react';
import { Tweet } from './components/Tweet';
import { sampleTweets } from '@/data/sampleTweets';

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
