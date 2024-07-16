import { Link } from "@tanstack/react-router";
import * as S from "./AppHeader.styled";

export default function AppHeader() {
  return (
    <S.Header>
      <nav>
        <Link to="/">
          <S.Title>ProgDle</S.Title>
        </Link>
        <Link to="/profile">
          <S.ProfilePicture
            src={
              "https://pbs.twimg.com/profile_images/1190265840056311808/HfcDP032_400x400.png"
            }
          />
        </Link>
      </nav>
    </S.Header>
  );
}
