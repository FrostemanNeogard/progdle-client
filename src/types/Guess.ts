type GuessState = "CORRECT" | "INCORRECT" | "PARTIAL";
export type Guess = {
  language: GuessState;
  releaseYear: GuessState;
  paradigm: GuessState;
  typing: GuessState;
  domain: GuessState;
  memorySafe: GuessState;
  os: GuessState;
};
