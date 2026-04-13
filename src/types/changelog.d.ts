declare module 'virtual:changelog' {
  interface CommitEntry {
    hash: string;
    subject: string;
    date: string;
    author: string;
  }
  const commits: CommitEntry[];
  export default commits;
}
