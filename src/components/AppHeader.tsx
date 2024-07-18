import { Link } from "@tanstack/react-router";
import * as S from "./AppHeader.styled";
import useAuth from "../hooks/Auth";

export default function AppHeader() {
  const { isLoggedIn, loggedInUser } = useAuth();

  return (
    <S.Header>
      <nav>
        <Link to="/">
          <S.Title>ProgDle</S.Title>
        </Link>
        <Link to="/profile">
          {isLoggedIn && loggedInUser?.username ? (
            <S.ProfilePicture src={loggedInUser?.profilePictureSrc} />
          ) : (
            <h1>Login</h1>
          )}
        </Link>
      </nav>
    </S.Header>
  );
}
