import axios from "axios";
import { useEffect, useState } from "react";
import { UserData } from "../types/User";

export default function useAuth() {
  const [token, setToken] = useState<string | null>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loggedInUser, setLoggedInUser] = useState<UserData | null>(
    JSON.parse(localStorage.getItem("userData") ?? "{}"),
  );

  const login = async (
    username: string,
    password: string,
  ): Promise<boolean> => {
    const res = await axios.post("http://localhost:8080/api/login", {
      username,
      password,
    });
    const newToken = res.data.token;
    console.log("LOGIN TOKEN:", newToken);
    if (!newToken) {
      alert(
        "An error ocurred when attempting to login. Please try again later.",
      );
      return false;
    }
    localStorage.setItem("loginToken", newToken);
    setToken(newToken);
    setIsLoggedIn(true);
    const userData = await axios.get(
      "http://localhost:8080/api/users/" + username,
    );
    setLoggedInUser(userData.data);
    localStorage.setItem("userData", JSON.stringify(userData.data));
    return true;
  };

  const logout = () => {
    localStorage.removeItem("loginToken");
    setToken(null);
    setIsLoggedIn(false);
    setLoggedInUser(null);
  };

  useEffect(() => {
    setToken(localStorage.getItem("loginToken") ?? "");
    setIsLoggedIn(!!localStorage.getItem("loginToken"));
  }, []);

  return { login, logout, isLoggedIn, token, loggedInUser };
}
