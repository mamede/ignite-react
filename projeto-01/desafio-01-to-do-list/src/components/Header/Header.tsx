import RocketIcon from '../../assets/rocket.svg';

import styled from "./Header.module.css";

export function Header() {
  return(
    <header className={styled.container}>
      <div className={styled.logo}>
        <div className={styled.icon}>
          <img src={RocketIcon} alt="Foguete, icone da lista de TO-DO" />
        </div>
        <h1>to</h1>
        <h1>do</h1>
      </div>
    </header>
  );
}