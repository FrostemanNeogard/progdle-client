import { SyntheticEvent, useContext, useState } from "react";
import * as S from "./GuessInputBar.styled";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { GuessesContext } from "../pages/root/RootPage";
import { Guess } from "../types/Guess";

export default function GuessInputBar() {
  const [languageInput, setLanguageInput] = useState<string>("");
  const { addGuess } = useContext(GuessesContext);

  const { isPending, mutate } = useMutation({
    mutationFn: (guess: string) => {
      return axios.get("http://localhost:8080/api/guess/" + guess);
    },
    onSuccess: (res: { data: Guess }) => {
      addGuess(res.data);
    },
  });

  const submitGuess = (e: SyntheticEvent) => {
    e.preventDefault();
    setLanguageInput("");
    mutate(languageInput);
  };

  return (
    <S.GuessForm onSubmit={submitGuess}>
      <S.GuessInput
        type="text"
        placeholder="Start typing..."
        value={languageInput}
        onChange={(e) => setLanguageInput(e.target.value)}
      />
      <S.GuessButton disabled={isPending} onClick={submitGuess}>
        Guess
      </S.GuessButton>
    </S.GuessForm>
  );
}
