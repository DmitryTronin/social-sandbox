import { Link } from 'react-router-dom';

export function Contact() {
  return (
    <div className="app">
      <h1>Contact</h1>
      <p>
        Email: <a href="mailto:test@admin.org">test@admin.org</a>
      </p>
      <Link to="/">← Back to tweets</Link>
    </div>
  );
}
