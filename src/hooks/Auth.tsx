import axios from "axios";
import { useEffect, useState } from "react";

export default function useAuth() {
  const [token, setToken] = useState<string | null>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = async (username: string, password: string) => {
    const res = await axios.post("http://localhost:8080/api/login", {
      username,
      password,
    });
    const newToken = res.data.token;
    if (!newToken) {
      alert("An error ocurred when attempting to login. Please try again later.");
      return;
    }
    localStorage.setItem("loginToken", newToken);
    setToken(newToken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("loginToken");
    setToken(null);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("loginToken") ?? "[]"));
    setIsLoggedIn(!!localStorage.getItem("loginToken"));
  }, []);

  return { login, logout, isLoggedIn, token };
}
