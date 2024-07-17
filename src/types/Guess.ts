type GuessState = "CORRECT" | "INCORRECT" | "PARTIAL";
export type Guess = {
  languageName: string;
  name: GuessState;
  language: GuessState;
  releaseYear: GuessState;
  paradigm: GuessState;
  typing: GuessState;
  domain: GuessState;
  memorySafe: GuessState;
  os: GuessState;
};
