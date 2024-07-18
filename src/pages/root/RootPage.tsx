import { Outlet } from "@tanstack/react-router";
import * as S from "./RootPage.styled";
import AppHeader from "../../components/AppHeader";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { createContext, useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/WindowDimensions";
import { Guess } from "../../types/Guess";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const GameStatusContext = createContext<{
  hasWon: boolean;
  changeGameStatus: (arg0: boolean) => void;
}>({ hasWon: false, changeGameStatus: () => {} });
export const MobileContext = createContext<boolean>(true);
export const GuessesContext = createContext<{
  guesses: Guess[];
  addGuess: (arg0: Guess) => void;
}>({ guesses: [], addGuess: () => {} });

const queryClient = new QueryClient();

export default function RootPage() {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState<boolean>(width < 1024);
  const [guesses, setGuesses] = useState<Guess[]>(
    JSON.parse(localStorage.getItem("guesses") ?? "[]") ?? [],
  );
  const [hasWon, setHasWon] = useState<boolean>(
    JSON.parse(localStorage.getItem("winstate") ?? "false") ?? false,
  );

  useEffect(() => {
    setIsMobile(width < 1024);
  }, [width]);

  const addGuess = (newGuess: Guess) => {
    localStorage.setItem("guesses", JSON.stringify([newGuess, ...guesses]));
    setGuesses((prev) => [newGuess, ...prev]);
  };

  const changeGameStatus = (newState: boolean) => {
    localStorage.setItem("winstate", JSON.stringify(newState));
    setHasWon(newState);
  };

  return (
    <ThemeProvider theme={theme}>
      <MobileContext.Provider value={isMobile}>
        <GameStatusContext.Provider value={{ hasWon, changeGameStatus }}>
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
        </GameStatusContext.Provider>
      </MobileContext.Provider>
    </ThemeProvider>
  );
}
