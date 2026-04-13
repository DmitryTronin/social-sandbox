import commits from 'virtual:changelog';

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function WhatsNew() {
  if (commits.length === 0) {
    return null;
  }

  return (
    <section style={{ marginTop: 32, padding: '0 16px' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>What's New</h2>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {commits.map((commit) => (
          <li
            key={commit.hash}
            style={{
              padding: '10px 0',
              borderBottom: '1px solid #e1e8ed',
              display: 'flex',
              gap: 12,
              alignItems: 'baseline',
            }}
          >
            <code
              style={{
                fontSize: 13,
                color: '#1d9bf0',
                background: '#f0f7ff',
                padding: '2px 6px',
                borderRadius: 4,
                flexShrink: 0,
              }}
            >
              {commit.hash}
            </code>
            <div style={{ flex: 1, minWidth: 0 }}>
              <span style={{ fontWeight: 500 }}>{commit.subject}</span>
              <div style={{ fontSize: 13, color: '#536471', marginTop: 2 }}>
                {commit.author} &middot; {formatDate(commit.date)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
