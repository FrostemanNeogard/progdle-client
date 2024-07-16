import { Outlet } from "@tanstack/react-router";
import * as S from "./RootPage.styled";
import AppHeader from "../../components/AppHeader";

export default function RootPage() {
  return (
    <S.Root>
      <AppHeader />
      <S.MainContent>
        <Outlet />
      </S.MainContent>
    </S.Root>
  );
}
