import { useEffect, useState } from "react";
import * as S from "./LeaderboardPage.styled";
import { UserData } from "../../types/User";
import axios from "axios";

export default function LeaderboardPage() {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/users")
      .then((res) =>
        setUsers(
          res.data.sort((a: UserData, b: UserData) => b.score - a.score),
        ),
      );
  }, []);

  return (
    <S.UsersList>
      <h1>Leaderboard</h1>
      {users.map((u, index) => (
        <div key={u.id}>
          <h3>{index + 1}.</h3>
          <img src={u.profilePictureSrc} />
          <h1>{u.username}</h1>
          <h2>Score: {u.score}</h2>
        </div>
      ))}
    </S.UsersList>
  );
}
