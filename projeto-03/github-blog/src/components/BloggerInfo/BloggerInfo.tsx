import { useEffect, useState } from "react";

// ASSETS
import { LucideGithub, ArrowUpRightSquare, Users2 } from 'lucide-react'


// SERVICES
import { api } from "../../services/api";

// STYLES
import * as S from "./BloggerInfo.styles";

// TYPES
import { BloggerProps } from "../../shared/types/bloggerTypes";

export function BloggerInfo() {
  const [userInfo, setUserInfo] = useState<BloggerProps>();

  async function fetchUsers() {
    const response = await api.get("users/mamede");
    const { name, followers, login, company, html_url, avatar_url, bio } = response.data;

    const newUserObj = {
      name,
      followers,
      githubUsername: login,
      company,
      url: html_url,
      imgUrl: avatar_url,
      description: bio,
    };
    setUserInfo(newUserObj);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <S.BloggerInfoContainer>
      <img width={148} height={148} src={userInfo?.imgUrl} alt="Person Photo" />
      <div>
        <header>
          <h1>{userInfo?.name}</h1>
          <a href={userInfo?.url} target="_blank">
            GITHUB <ArrowUpRightSquare />
          </a>
        </header>
        <main>
          <p>{userInfo?.description}</p>
        </main>
        <footer>
          <span>
            <LucideGithub />
            {userInfo?.githubUsername}
          </span>
          <span>
            <Users2 />
            {userInfo?.followers} Followers
          </span>
        </footer>
      </div>
    </S.BloggerInfoContainer>
  );
}