import { Outlet } from "@tanstack/react-router";
import * as S from "./RootPage.styled";
import AppHeader from "../../components/AppHeader";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { createContext, useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/WindowDimensions";

export const MobileContext = createContext(true);

export default function RootPage() {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState<boolean>(width < 768);

  useEffect(() => {
    setIsMobile(width < 768);
  }, [width]);

  return (
    <ThemeProvider theme={theme}>
      <MobileContext.Provider value={isMobile}>
        <S.Root>
          <AppHeader />
          <S.MainContent>
            <Outlet />
          </S.MainContent>
        </S.Root>
      </MobileContext.Provider>
    </ThemeProvider>
  );
}
