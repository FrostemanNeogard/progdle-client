import { useContext } from "react";
import CodeSnippet from "../../components/CodeSnippet";
import GuessInputBar from "../../components/GuessInputBar";
import GuessTable from "../../components/GuessTable";
import GuessNavigation from "../../components/GuessNavigation";
import * as S from "./HomePage.styled";
import { MobileContext } from "../root/RootPage";

export default function HomePage() {
  const isMobile = useContext(MobileContext);

  // Temporary data setters for testing purposes
  const code = `
for (let i = 0; i < 10; i++) {
    console.log("hello");
}
    `;

  return (
    <>
      <S.InstructionHeading>
        Guess the Programming Language
      </S.InstructionHeading>
      <CodeSnippet content={code} />
      <S.GuessCount>Guesses: {0}/5</S.GuessCount>
      <GuessTable />
      {isMobile && <GuessNavigation />}
      <GuessInputBar />
    </>
  );
}
