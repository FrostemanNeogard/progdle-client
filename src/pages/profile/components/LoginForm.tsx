import React, { useState } from "react";
import * as S from "./LoginForm.styled";
import useAuth from "../../../hooks/Auth";

export default function LoginForm() {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasLoggedIn, setHasLoggedIn] = useState<boolean>(false);

  const { login } = useAuth();

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (hasLoggedIn) {
      alert("You are already logged in.");
      return;
    }
    if (!username || !password) {
      alert(
        "Invalid login data. Please make sure to input both username and password.",
      );
      return;
    }
    const loginSuccess = await login(username, password);
    setHasLoggedIn(loginSuccess);
    setIsLoading(false);
    if (loginSuccess) {
      window.location.reload();
    }
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

      <S.LoginButton
        disabled={isLoading || hasLoggedIn || !username || !password}
      >
        Login
      </S.LoginButton>
    </S.Form>
  );
}
