import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// ASSETS
import { ChevronLeft, ArrowUpRightSquare, LucideGithub, Calendar, ScrollText } from 'lucide-react'

// SERVICES
import { api } from "../../services/api";

// STYLES
import * as S from "./Details.styles";

// TYPES
import { PostDetailsProps } from "../../shared/types/postTypes";
import { formatDate } from "../../utils/formats";

export function Details() {
  const [post, setPost] = useState<PostDetailsProps>({} as PostDetailsProps);
  const { id } = useParams();

  async function fetchPost() {
    const response = await api.get(
      `/repos/mamede/github-blog/issues/${id}`
    );
    const { title, comments, created_at, user, html_url, body } = response.data;
    const newPostObj = {
      title,
      githubUsername: user.login,
      comments,
      createdAt: formatDate(created_at),
      url: html_url,
      body,
    };
    setPost(newPostObj);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <S.PostDetailContainer>
      <S.PostDetailCard>
        <header>
          <S.NavButton to="/" type="button">
            <ChevronLeft />
            Back
          </S.NavButton>
          <a href={post.url} target="_blank">
            See on Github
            <ArrowUpRightSquare />
          </a>
        </header>
        <div>
          <h1>{post.title}</h1>
        </div>
        <footer>
          <span>
            <LucideGithub />
            {post.githubUsername}
          </span>
          <span>
            <Calendar />
            {post.createdAt}
          </span>
          <span>
            <ScrollText />
            {post.comments} Comments
          </span>
        </footer>
      </S.PostDetailCard>
      <S.PostDetailContent>
        <div>
          {post.body}
        </div>
      </S.PostDetailContent>
    </S.PostDetailContainer>
  );
}