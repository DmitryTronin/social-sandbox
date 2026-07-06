export interface TweetData {
  id: string;
  text: string;
  author: {
    name: string;
    handle: string;
    avatarUrl: string;
  };
  createdAt: string;
  likes: number;
  retweets: number;
  replies: number;
  likedByMe?: boolean;
  retweetedByMe?: boolean;
}
