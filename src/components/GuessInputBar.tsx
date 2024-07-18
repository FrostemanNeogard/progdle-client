import { SyntheticEvent, useContext, useState } from "react";
import * as S from "./GuessInputBar.styled";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { GameStatusContext, GuessesContext } from "../pages/root/RootPage";
import { Guess } from "../types/Guess";

export default function GuessInputBar() {
  const [languageInput, setLanguageInput] = useState<string>("");
  const { guesses, addGuess } = useContext(GuessesContext);
  const { hasWon, changeGameStatus } = useContext(GameStatusContext);

  const { isPending, mutate } = useMutation({
    mutationFn: (guess: string) => {
      return axios.get("http://localhost:8080/api/guess/" + guess);
    },
    onSuccess: (res: { data: Guess }) => {
      if (res.data.name == "CORRECT") {
        changeGameStatus(true);
        alert(
          "Correct! The programming language was: " +
            res.data.languageData.name,
        );
        return;
      }
      addGuess(res.data);
    },
  });

  const submitGuess = (e: SyntheticEvent) => {
    e.preventDefault();
    if (hasWon) {
      return;
    }
    if (guesses.length >= 5) {
      return;
    }
    setLanguageInput("");
    const guessedNames = guesses.map((g) => g.languageData.name);
    if (guessedNames.includes(languageInput)) {
      alert(languageInput + " has already been guessed.");
      return;
    }
    mutate(languageInput);
  };

  return (
    <S.GuessForm onSubmit={submitGuess}>
      <S.GuessInput
        type="text"
        placeholder="Start typing..."
        value={languageInput}
        disabled={hasWon}
        onChange={(e) => setLanguageInput(e.target.value)}
      />
      <S.GuessButton
        disabled={isPending || guesses.length >= 5 || hasWon}
        onClick={submitGuess}
      >
        Guess
      </S.GuessButton>
    </S.GuessForm>
  );
}
