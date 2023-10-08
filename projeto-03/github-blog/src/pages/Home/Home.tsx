import { useEffect, useState } from "react";

// SERVICES
import { api } from "../../services/api";

// COMPONENTS
import { BloggerInfo } from "../../components/BloggerInfo/BloggerInfo";
import { PostCard } from "../../components/PostCard/PostCard";

// STYLES
import * as S from "./Home.styles";

// TYPES
import { PostProps } from '../../shared/types/postTypes'

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([] as PostProps[]);
  const [postsCounter, setPostsCounter] = useState(0);

  async function fetchPosts(query = "") {
    const response = await api.get(
      `search/issues?q=${query ? query : ""
      }%20repo:${"mamede"}/github-blog`
    );
    setPosts(response.data.items);
    setPostsCounter(response.data.total_count);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <S.HomeContainer>
      <BloggerInfo />
      <S.HomeContent>
        <S.SearchSection>
          <div>
            <span>Posts</span>
            <small>{postsCounter} posts</small>
          </div>
          <input
            type="text"
            onBlur={(e) => fetchPosts(e.target.value)}
            placeholder="Search a Post"
          />
        </S.SearchSection>
        <S.ListSection>
          {posts &&
            posts.map((post) => (
              <PostCard
                key={`${post.title}-${post.number}`}
                post={post}
              ></PostCard>
            ))}
        </S.ListSection>
      </S.HomeContent>
    </S.HomeContainer>
  );
}