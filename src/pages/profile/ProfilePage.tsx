import { useEffect, useState } from "react";
import * as S from "./ProfilePage.styled";
import axios from "axios";
import useAuth from "../../hooks/Auth";
import { UserData } from "../../types/User";

export default function ProfilePage() {
  const { logout, token } = useAuth();
  const [userData, setUserData] = useState<UserData | null>();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/users/" + token)
      .then((res) => setUserData(res.data));
  }, [token]);

  return (
    <S.Profile>
      <S.ProfileForm>
        <label htmlFor="username">Username</label>
        <input name="username" type="text" disabled={!isEditMode} defaultValue={userData?.username} />
      </S.ProfileForm>

      <h1>Score: {userData?.score}</h1>

      {isEditMode ? (
        <button onClick={() => setIsEditMode(true)}>Edit Profile</button>
      ) : (
        <button onClick={() => setIsEditMode(false)}>Save Changes</button>
      )}
      <S.LogoutButton onClick={logout}>Logout</S.LogoutButton>
    </S.Profile>
  );
}
