type GuessState = "CORRECT" | "INCORRECT" | "PARTIAL";
export type Language = {
  id: string;
  releaseYear: number;
  memorySafe: boolean;
  domain: string;
  name: string;
  os: string;
  paradigm: string;
  typing: string;
};
export type Guess = {
  languageData: Language;
  name: GuessState;
  language: GuessState;
  releaseYear: GuessState;
  paradigm: GuessState;
  typing: GuessState;
  domain: GuessState;
  memorySafe: GuessState;
  os: GuessState;
};
