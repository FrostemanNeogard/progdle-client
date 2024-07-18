import { Link } from "@tanstack/react-router";
import * as S from "./HomePage.styled";
import { useContext } from "react";
import { GameStatusContext } from "../root/RootPage";

export default function HomePage() {
  const { changeGameStatus } = useContext(GameStatusContext);

  const clearCache = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("guesses");
    localStorage.removeItem("haswon");
    changeGameStatus(false);
  };

  return (
    <S.HomeContent>
      <p>
        Welcome to ProgDle!
        <br />
        What would you like to do?
      </p>
      <div>
        <Link to="/game">Play</Link>
        <Link to="/profile">Login</Link>
        <Link to="/leaderboard">View Leaderboard</Link>
        <button onClick={clearCache}>Clear Cache</button>
      </div>
    </S.HomeContent>
  );
}
