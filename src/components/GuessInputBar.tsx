import { SyntheticEvent, useState } from "react";

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
    <form onSubmit={submitGuess}>
      <input
        type="text"
        placeholder="Start typing..."
        value={languageInput}
        onChange={(e) => setLanguageInput(e.target.value)}
      />
      <button>Guess</button>
    </form>
  );
}
