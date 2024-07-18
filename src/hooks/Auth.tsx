import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { UserData } from "../types/User";

export default function useAuth() {
  const [token, setToken] = useState<string | null>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loggedInUser, setLoggedInUser] = useState<UserData | null>(
    JSON.parse(localStorage.getItem("userData") ?? "{}"),
  );

  useEffect(() => {
    const validateLogin = async () => {
      try {
        await axios.get(
          "http://localhost:8080/api/users/" + loggedInUser?.username,
        );
      } catch (e: unknown) {
        if (e instanceof AxiosError == false) {
          logout();
          alert("An unknown error ocurred.");
          return;
        }
        if (e.response?.status == 404) {
          logout();
        }
      }
    };
    if (loggedInUser?.username) {
      validateLogin();
    }
  }, [loggedInUser]);

  const login = async (
    username: string,
    password: string,
  ): Promise<boolean> => {
    let res;
    try {
      const axiosResponse = await axios.post(
        "http://localhost:8080/api/login",
        {
          username,
          password,
        },
      );
      res = axiosResponse;
    } catch (e: unknown) {
      if (e instanceof AxiosError == false) {
        alert("An unknown error ocurred when attempting to log in.");
        return false;
      }
      if (e.response?.status == 404) {
        alert(`User "${username}" doesn't exist.`);
        return false;
      }
      if (e.response?.status == 401) {
        alert("Incorrect password. Please try again.");
        return false;
      }
      alert("An unknown error ocurred when attempting to log in.");
      return false;
    }
    const newToken = res.data.token;
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
    alert("Login successful!");
    return true;
  };

  const logout = () => {
    localStorage.removeItem("loginToken");
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem("userData");
    setLoggedInUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    setToken(localStorage.getItem("loginToken") ?? "");
    setIsLoggedIn(!!localStorage.getItem("loginToken"));
  }, []);

  return { login, logout, isLoggedIn, token, loggedInUser };
}
