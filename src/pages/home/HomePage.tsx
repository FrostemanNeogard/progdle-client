import { useEffect, useState } from "react";
import CodeSnippet from "../../components/CodeSnippet";
import GuessInputBar from "../../components/GuessInputBar";
import GuessTable from "../../components/GuessTable";
import GuessNavigation from "../../components/GuessNavigation";
import { Guess } from "../../types/Guess";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [guesses, setGuesses] = useState<Guess[]>([]);

  // Temporary data setters for testing purposes
  useEffect(() => {
    setIsMobile(true);
    setGuesses([
      {
        releaseYear: 1990,
        paradigm: "Multi-Paradigm",
        typing: "Weak, Dynamic",
        domain: "Web",
        memorySafe: false,
        os: "Windows",
      },
      {
        releaseYear: 1990,
        paradigm: "Multi-Paradigm",
        typing: "Weak, Dynamic",
        domain: "Web",
        memorySafe: false,
        os: "Windows",
      },
    ]);
  }, []);

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
      <h2>Guess the Programming Language</h2>
      <h1>Guesses: {0}/5</h1>
      <CodeSnippet content={code} />;
      <GuessTable guessData={guesses} />
      {isMobile && <GuessNavigation />}
      <GuessInputBar setter={makeGuess} />
    </>
  );
}
