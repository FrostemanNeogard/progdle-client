import { Outlet } from "@tanstack/react-router";
import * as S from "./RootPage.styled";
import AppHeader from "../../components/AppHeader";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

export default function RootPage() {
  return (
    <ThemeProvider theme={theme}>
      <S.Root>
        <AppHeader />
        <S.MainContent>
          <Outlet />
        </S.MainContent>
      </S.Root>
    </ThemeProvider>
  );
}
