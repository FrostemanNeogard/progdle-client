import { Outlet } from "@tanstack/react-router";
import * as S from "./RootPage.styled";
import AppHeader from "../../components/AppHeader";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { createContext, useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/WindowDimensions";
import { Guess } from "../../types/Guess";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const MobileContext = createContext<boolean>(true);
export const GuessesContext = createContext<{
  guesses: Guess[];
  addGuess: (arg0: Guess) => void;
}>({ guesses: [], addGuess: () => {} });

const queryClient = new QueryClient();

export default function RootPage() {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState<boolean>(width < 1024);
  const [guesses, setGuesses] = useState<Guess[]>([]);

  useEffect(() => {
    setIsMobile(width < 1024);
  }, [width]);

  const addGuess = (newGuess: Guess) => {
    setGuesses((prev) => [...prev, newGuess]);
  };

  return (
    <ThemeProvider theme={theme}>
      <MobileContext.Provider value={isMobile}>
        <GuessesContext.Provider value={{ guesses, addGuess }}>
          <QueryClientProvider client={queryClient}>
            <S.Root>
              <AppHeader />
              <S.MainContent>
                <Outlet />
              </S.MainContent>
            </S.Root>
          </QueryClientProvider>
        </GuessesContext.Provider>
      </MobileContext.Provider>
    </ThemeProvider>
  );
}
