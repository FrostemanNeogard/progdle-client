import React, { useEffect, useState } from "react";
import * as S from "./ProfilePage.styled";
import axios from "axios";
import useAuth from "../../hooks/Auth";
import { UserData } from "../../types/User";
import LoginForm from "./components/LoginForm";

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
      .get("http://localhost:8080/api/users/" + loggedInUser?.username)
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
    const data = await axios.put(
      "http://localhost:8080/users/" + userData?.username,
      { username, profilePictureSrc: profilePicture },
    );
    console.log("UPDATED USER DATA:", data);
  };

  return (
    <S.Profile>
      <S.ProfileForm onSubmit={updateProfile}>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          disabled={!isEditMode}
          defaultValue={userData?.username}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="pfp">Profile Picture URL</label>
        <input
          name="pfp"
          type="text"
          disabled={!isEditMode}
          defaultValue={userData?.profilePictureSrc}
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
        />

        {isEditMode && <button onClick={updateProfile}>Save Changes</button>}
      </S.ProfileForm>

      <h1>Score: {userData?.score}</h1>
      <button onClick={() => setIsEditMode(true)} disabled={isEditMode}>
        Edit Profile
      </button>
      <S.LogoutButton onClick={logout}>Logout</S.LogoutButton>
    </S.Profile>
  );
}
