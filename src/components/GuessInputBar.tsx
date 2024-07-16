import { SyntheticEvent, useState } from "react";
import * as S from "./GuessInputBar.styled";

type GuessInputBar = {
  setter: (arg0: string) => void;
};
export default function GuessInputBar({ setter }: GuessInputBar) {
  const [languageInput, setLanguageInput] = useState<string>("");

  const submitGuess = (e: SyntheticEvent) => {
    e.preventDefault();
    setter(languageInput);
    console.log("Making guess...");
  };

  return (
    <S.GuessForm onSubmit={submitGuess}>
      <S.GuessInput
        type="text"
        placeholder="Start typing..."
        value={languageInput}
        onChange={(e) => setLanguageInput(e.target.value)}
      />
      <S.GuessButton>Guess</S.GuessButton>
    </S.GuessForm>
  );
}
