import React, { useContext } from "react";
import * as S from "./GuessTable.styled";
import { GuessesContext, MobileContext } from "../pages/root/RootPage";

export default function GuessTable() {
  const { guesses, addGuess } = useContext(GuessesContext);
  const isMobile = useContext(MobileContext);

  return (
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
      {guesses?.map((guess, index) => (
        <React.Fragment key={index}>
          {isMobile && (
            <>
              <thead>
                <tr>
                  <th>{guess.language}</th>
                </tr>
              </thead>
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
              {!isMobile && <td>{guess.language ?? null}</td>}
              <td>{guess.releaseYear}</td>
              <td>{guess.paradigm}</td>
              <td>{guess.typing}</td>
              <td>{guess.domain}</td>
              <td>{guess.memorySafe ? "Yes" : "No"}</td>
              <td>{guess.os}</td>
            </tr>
          </tbody>
        </React.Fragment>
      ))}
    </S.GuessTable>
  );
}
