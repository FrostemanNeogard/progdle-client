import SyntaxHighlighter from "react-syntax-highlighter";
import * as S from "./CodeSnippet.styled.ts";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { GuessesContext } from "../pages/root/RootPage.tsx";
import axios from "axios";

export default function CodeSnippet() {
  const { guesses } = useContext(GuessesContext);
  const { isPending, error, data } = useQuery({
    queryKey: ["snippet-level-" + guesses.length],
    queryFn: () => axios.get("http://localhost:8080/api/snippets/daily/" + (guesses.length + 1)),
  })

  if (isPending) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    )
  }

  return (
    <S.CodeBlock>
      <SyntaxHighlighter language="javascript">{data.data.content}</SyntaxHighlighter>
    </S.CodeBlock>
  );
}
