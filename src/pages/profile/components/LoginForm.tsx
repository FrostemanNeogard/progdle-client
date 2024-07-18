import { useState } from "react";
import * as S from "./LoginForm.styled";
import useAuth from "../../../hooks/Auth";

export default function LoginForm() {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasLoggedIn, setHasLoggedIn] = useState<boolean>(false);

  const { login } = useAuth();

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Invalid login data. Please make sure to input both username and password.")
      return;
    }
    login(username, password);
    setHasLoggedIn(true);
    setIsLoading(false);
  };

  return (
    <S.Form onSubmit={handleLogin}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button disabled={isLoading || hasLoggedIn || !username || !password}>Login</button>
    </S.Form>
  );
}
