import { Tweet } from './components/Tweet';
import { sampleTweets } from '@/data/sampleTweets';

function App() {
  return (
    <div className="app">
      <h1>Tweet Viewer</h1>
      {sampleTweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
}

export default App;
