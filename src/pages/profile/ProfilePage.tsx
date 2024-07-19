import React, { useEffect, useState } from "react";
import * as S from "./ProfilePage.styled";
import axios from "axios";
import useAuth from "../../hooks/Auth";
import { UserData } from "../../types/User";
import LoginForm from "./components/LoginForm";
import { Link } from "@tanstack/react-router";
import { BASE_API_URL } from "../../util/config";

export default function ProfilePage() {
  const { logout, token, isLoggedIn, loggedInUser } = useAuth();
  const [userData, setUserData] = useState<UserData | null>();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [username, setUsername] = useState<string>(userData?.username ?? "");
  const [profilePicture, setProfilePicture] = useState<string>(
    userData?.profilePictureSrc ?? "",
  );

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    axios
      .get(BASE_API_URL + "/api/users/" + loggedInUser?.username)
      .then((res) => setUserData(res.data));
  }, [token, loggedInUser, isLoggedIn]);

  if (!isLoggedIn) {
    return <LoginForm />;
  }

  const updateProfile = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!isEditMode) {
      return;
    }

    setIsEditMode(false);
    await axios.put(BASE_API_URL + "/api/users/" + userData?.username, {
      username: username.length > 0 ? username : userData?.username,
      profilePictureSrc:
        profilePicture.length > 0
          ? profilePicture
          : userData?.profilePictureSrc,
    });
    const newUserData = { ...userData };
    newUserData.username = username;
    localStorage.setItem("userData", JSON.stringify(newUserData));
    alert("User profile successfully updated!");
  };

  return (
    <S.Profile>
      {!isEditMode && (
        <div>
          <img src={userData?.profilePictureSrc} />
          <h1>{userData?.username}</h1>
        </div>
      )}
      {isEditMode && (
        <S.ProfileForm onSubmit={updateProfile}>
          <label htmlFor="username">New Username</label>
          <input
            name="username"
            type="text"
            disabled={!isEditMode}
            value={isEditMode ? username : userData?.username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="pfp">New Profile Picture URL</label>
          <input
            name="pfp"
            type="text"
            disabled={!isEditMode}
            value={isEditMode ? profilePicture : userData?.profilePictureSrc}
            onChange={(e) => setProfilePicture(e.target.value)}
          />

          {isEditMode && (
            <S.SaveButton onClick={updateProfile}>Save Changes</S.SaveButton>
          )}
          {isEditMode && (
            <S.CancelButton onClick={() => setIsEditMode(false)}>
              Cancel Changes
            </S.CancelButton>
          )}
        </S.ProfileForm>
      )}

      <h1>Your Score: {userData?.score}</h1>
      <button onClick={() => setIsEditMode(true)} disabled={isEditMode}>
        Edit Profile
      </button>
      <Link to={"/game"}>Back to game</Link>
      <S.LogoutButton onClick={logout}>Logout</S.LogoutButton>
    </S.Profile>
  );
}
