import { useContext } from "react";
import CodeSnippet from "../../components/CodeSnippet";
import GuessInputBar from "../../components/GuessInputBar";
import GuessTable from "../../components/GuessTable";
import GuessNavigation from "../../components/GuessNavigation";
import * as S from "./HomePage.styled";
import { GuessesContext, MobileContext } from "../root/RootPage";

export default function HomePage() {
  const isMobile = useContext(MobileContext);
  const { guesses } = useContext(GuessesContext);

  return (
    <>
      <S.InstructionHeading>
        Guess the Programming Language
      </S.InstructionHeading>
      <CodeSnippet />
      <S.GuessCount>Guesses: {guesses.length}/5</S.GuessCount>
      <GuessTable />
      {isMobile && <GuessNavigation />}
      <GuessInputBar />
    </>
  );
}
