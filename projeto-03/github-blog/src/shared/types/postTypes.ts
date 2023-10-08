export interface PostProps {
  title: string;
  body: string;
  created_at: string;
  number: string;
}

export interface PostCardProps {
  post: PostProps;
}

export interface PostDetailsProps {
  title: string;
  comments: number;
  createdAt: string;
  githubUsername: string;
  url: string;
  body: string;
}