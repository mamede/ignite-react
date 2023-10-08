// STYLES
import * as S from "./Header.styles";

// ASSETS
import headerBG from "../../assets/headerBG.png";

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={headerBG} alt="Capa do site Github Blog."></img>
    </S.HeaderContainer>
  );
}