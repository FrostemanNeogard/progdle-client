import { useState } from "react";
import CodeSnippet from "../../components/CodeSnippet";
import GuessInputBar from "../../components/GuessInputBar";
import GuessTable from "../../components/GuessTable";
import GuessNavigation from "../../components/GuessNavigation";
import { Guess } from "../../types/Guess";
import * as S from "./HomePage.styled";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [guesses, setGuesses] = useState<Guess[]>([
    {
      releaseYear: 1990,
      paradigm: "Multi-Paradigm",
      typing: "Weak, Dynamic",
      domain: "Web",
      memorySafe: false,
      os: "Windows",
    },
  ]);

  // Temporary data setters for testing purposes
  const code = `
for (let i = 0; i < 10; i++) {
    console.log("hello");
}
    `;

  const updateGuesses = (guess: Guess) => {
    setGuesses((prev) => [...prev, guess]);
  };

  const makeGuess = async (guess: string) => {
    const guessResponse = await fetch("", {
      method: "POST",
      body: JSON.stringify({ guess: guess }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newGuess: Guess = await guessResponse.json();
    updateGuesses(newGuess);
  };

  return (
    <>
      <S.InstructionHeading>
        Guess the Programming Language
      </S.InstructionHeading>
      <S.GuessCount>Guesses: {0}/5</S.GuessCount>
      <CodeSnippet content={code} />
      <GuessTable guessData={guesses} />
      {isMobile && <GuessNavigation />}
      <GuessInputBar setter={makeGuess} />
    </>
  );
}
