// UTILS
import { formatDate, formatText } from "../../utils/formats";

// STYLES
import * as S from "./PostCard.styles";

// TYPES
import { PostCardProps } from "../../shared/types/postTypes";



export function PostCard({ post }: PostCardProps) {
  const { created_at, body, title, number } = post;

  return (
    <S.PostCardContainer to={`/${number}`}>
      <header>
        <h1>{title}</h1>
        <span>{formatDate(created_at)}</span>
      </header>
      <main>
        <p>{formatText(body, 80)}</p>
      </main>
    </S.PostCardContainer>
  );
}