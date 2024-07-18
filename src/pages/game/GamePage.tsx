import { useContext, useState } from "react";
import CodeSnippet from "../../components/CodeSnippet";
import GuessInputBar from "../../components/GuessInputBar";
import GuessTable from "../../components/GuessTable";
import * as S from "./GamePage.styled";
import { GuessesContext, MobileContext } from "../root/RootPage";

export default function GamePage() {
  const isMobile = useContext(MobileContext);
  const { guesses } = useContext(GuessesContext);
  const [guessPageIndex, setGuessPageIndex] = useState<number>(0);

  const incrementPageIndex = () => {
    if (guessPageIndex >= guesses.length - 1) {
      return;
    }
    setGuessPageIndex((prev) => prev + 1);
  }

  const decrementPageIndex = () => {
    if (guessPageIndex == 0) {
      return;
    }
    setGuessPageIndex((prev) => prev - 1);
  }

  return (
    <>
      <S.InstructionHeading>
        Guess the Programming Language
      </S.InstructionHeading>
      <CodeSnippet />
      <S.GuessCount>Guesses: {guesses.length}/5</S.GuessCount>
      <GuessTable pageIndex={guessPageIndex}/>
      {isMobile && (
        <S.NavBar>
          <button onClick={decrementPageIndex}>Prev</button>
          <button onClick={incrementPageIndex}>Next</button>
        </S.NavBar>
      )}
      <GuessInputBar />
    </>
  );
}
