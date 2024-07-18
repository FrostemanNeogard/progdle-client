import { SyntheticEvent, useContext, useEffect, useState } from "react";
import * as S from "./GuessInputBar.styled";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { GameStatusContext, GuessesContext } from "../pages/root/RootPage";
import { Guess, Language } from "../types/Guess";
import useAuth from "../hooks/Auth";

export default function GuessInputBar() {
  const [languageInput, setLanguageInput] = useState<string>("");
  const [allLanguages, setAllLanguages] = useState<string[]>([]);
  const { token, isLoggedIn } = useAuth();
  const { guesses, addGuess } = useContext(GuessesContext);
  const { hasWon, changeGameStatus } = useContext(GameStatusContext);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/languages")
      .then((res) => setAllLanguages(res.data.map((l: Language) => l.name)));
  }, []);

  const { isPending, mutate } = useMutation({
    mutationFn: (guess: string) => {
      return axios.get("http://localhost:8080/api/guess/" + guess, {
        headers: {
          Authorization: "Bearer " + isLoggedIn ? token : null,
        },
      });
    },
    onSuccess: (res: { data: Guess }) => {
      addGuess(res.data);
      if (res.data.name == "CORRECT") {
        changeGameStatus(true);
        alert(
          "Correct! The programming language was: " +
            res.data.languageData.name,
        );
        return;
      }
      if (guesses.length >= 4) {
        alert("You lose!");
      }
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
        list="languages"
        disabled={hasWon || guesses.length >= 5}
        onChange={(e) => setLanguageInput(e.target.value)}
      />
      <datalist id="languages">
        {allLanguages.map((l, index) => (
          <option value={l} key={index} />
        ))}
      </datalist>
      <S.GuessButton
        disabled={isPending || guesses.length >= 5 || hasWon}
        onClick={submitGuess}
      >
        Guess
      </S.GuessButton>
    </S.GuessForm>
  );
}
