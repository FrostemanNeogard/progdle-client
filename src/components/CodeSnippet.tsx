import SyntaxHighlighter from "react-syntax-highlighter";
import * as S from "./CodeSnippet.styled.ts";

type CodeSnippetProps = {
  content: string;
};
export default function CodeSnippet({ content }: CodeSnippetProps) {
  return (
    <S.CodeBlock>
      <SyntaxHighlighter language="javascript">{content}</SyntaxHighlighter>
    </S.CodeBlock>
  );
}
