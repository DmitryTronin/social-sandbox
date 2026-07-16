import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Could not find the application root.');
}

ReactDOM.createRoot(root).render(<App />);
