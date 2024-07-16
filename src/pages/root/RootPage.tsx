import { Outlet } from "@tanstack/react-router";
import * as S from "./RootPage.styled";
import AppHeader from "../../components/AppHeader";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { createContext, useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/WindowDimensions";
import { Guess } from "../../types/Guess";

export const MobileContext = createContext<boolean>(true);
export const GuessesContext = createContext<{
  guesses: Guess[];
  addGuess?: (arg0: Guess) => void;
}>({ guesses: [] });

export default function RootPage() {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState<boolean>(width < 768);
  const [guesses, setGuesses] = useState<Guess[]>([]);

  useEffect(() => {
    setIsMobile(width < 768);

    // Hard-coded for testing purposes
    setGuesses([
      {
        releaseYear: 1990,
        language: "JavaScript",
        paradigm: "Multi-Paradigm",
        typing: "Weak, Dynamic",
        domain: "Web",
        memorySafe: false,
        os: "Windows",
      },
    ]);
  }, [width]);

  const addGuess = (newGuess: Guess) => {
    setGuesses((prev) => [...prev, newGuess]);
  };

  return (
    <ThemeProvider theme={theme}>
      <MobileContext.Provider value={isMobile}>
        <GuessesContext.Provider value={{ guesses, addGuess }}>
          <S.Root>
            <AppHeader />
            <S.MainContent>
              <Outlet />
            </S.MainContent>
          </S.Root>
        </GuessesContext.Provider>
      </MobileContext.Provider>
    </ThemeProvider>
  );
}
