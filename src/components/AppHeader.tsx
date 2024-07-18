import { Link } from "@tanstack/react-router";
import * as S from "./AppHeader.styled";
import useAuth from "../hooks/Auth";

export default function AppHeader() {
  const { isLoggedIn } = useAuth();

  return (
    <S.Header>
      <nav>
        <Link to="/">
          <S.Title>ProgDle</S.Title>
        </Link>
        <Link to="/profile">
          {isLoggedIn ? (
            <S.ProfilePicture
              src={
                "https://pbs.twimg.com/profile_images/1190265840056311808/HfcDP032_400x400.png"
              }
            />
          ) : (
            <h1>Login</h1>
          )}
        </Link>
      </nav>
    </S.Header>
  );
}
