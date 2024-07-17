import { Fragment, useContext } from "react";
import * as S from "./GuessTable.styled";
import { GuessesContext, MobileContext } from "../pages/root/RootPage";

export default function GuessTable() {
  const { guesses } = useContext(GuessesContext);
  const isMobile = useContext(MobileContext);

  return (
    <S.GuessTablesContainer>
      {guesses.map((guess, index) => (
        <Fragment key={index}>
          <h1>{guess.languageName}</h1>
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
              <>
                {!isMobile && (
                  <thead>
                    <tr>
                      <th>{guess.language}</th>
                    </tr>
                  </thead>
                )}
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
              </>
            )}
            <tbody>
              <tr>
                {!isMobile && <td>{guess.language}</td>}
                <td className={guess.releaseYear}>{guess.releaseYear}</td>
                <td className={guess.paradigm}>{guess.paradigm}</td>
                <td className={guess.typing}>{guess.typing}</td>
                <td className={guess.domain}>{guess.domain}</td>
                <td className={guess.memorySafe}>
                  {guess.memorySafe ? "Yes" : "No"}
                </td>
                <td className={guess.os}>{guess.os}</td>
              </tr>
            </tbody>
          </S.GuessTable>
        </Fragment>
      ))}
    </S.GuessTablesContainer>
  );
}
