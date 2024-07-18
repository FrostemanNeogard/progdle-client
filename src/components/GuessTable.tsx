import { Fragment, useContext } from "react";
import * as S from "./GuessTable.styled";
import { GuessesContext, MobileContext } from "../pages/root/RootPage";

type GuessTableProps = {
  pageIndex: number;
};
export default function GuessTable({ pageIndex }: GuessTableProps) {
  const { guesses } = useContext(GuessesContext);
  const isMobile = useContext(MobileContext);

  return (
    <S.GuessTablesContainer $pageIndex={pageIndex}>
      {guesses.map((guess, index) => (
        <Fragment key={index}>
          <h1>{guess?.languageData?.name}</h1>
          <S.GuessTable>
            {!isMobile && (
              <thead>
                <tr>
                  <th>Language</th>
                  <th>Release Year</th>
                  <th>Paradigm</th>
                  <th>Typing</th>
                  <th>Domain</th>
                  <th>Memory safe</th>
                  <th>OS</th>
                </tr>
              </thead>
            )}
            {isMobile && (
              <tbody>
                <tr>
                  {!isMobile && <td>Language</td>}
                  <td>Release Year</td>
                  <td>Paradigm</td>
                  <td>Typing</td>
                  <td>Domain</td>
                  <td>Memory safe</td>
                  <td>OS</td>
                </tr>
              </tbody>
            )}
            <tbody>
              <tr>
                {!isMobile && <td>{guess?.languageData?.name}</td>}
                <td
                  className={
                    guess?.releaseYear == "CORRECT"
                      ? "year CORRECT"
                      : "year INCORRECT"
                  }
                >
                  {guess?.releaseYear == "PARTIAL" && <span>&uarr;</span>}
                  {guess?.releaseYear == "INCORRECT" && <span>&darr;</span>}
                  {guess?.languageData?.releaseYear}
                </td>
                <td className={guess?.paradigm}>
                  {guess?.languageData?.paradigm}
                </td>
                <td className={guess?.typing}>{guess?.languageData?.typing}</td>
                <td className={guess?.domain}>{guess?.languageData?.domain}</td>
                <td className={guess?.memorySafe}>
                  {guess?.languageData?.memorySafe ? "Yes" : "No"}
                </td>
                <td className={guess?.os}>{guess?.languageData?.os}</td>
              </tr>
            </tbody>
          </S.GuessTable>
        </Fragment>
      ))}
    </S.GuessTablesContainer>
  );
}
