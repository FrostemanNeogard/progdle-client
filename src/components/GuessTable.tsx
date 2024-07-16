import React, { useState } from "react";
import { Guess } from "../types/Guess";
import * as S from "./GuessTable.styled";

type GuessTableProps = {
  guessData: Guess[];
};
export default function GuessTable({ guessData }: GuessTableProps) {
  const [guesses, setGuesses] = useState<Guess[]>(guessData);
  const [isMobile, setIsMobile] = useState<boolean>(true);

  return (
    <S.GuessTable>
      {guesses.map((guess, index) => (
        <React.Fragment key={index}>
          {isMobile && (
            <S.TableLanguageHeading>{guess.language}</S.TableLanguageHeading>
          )}
          {isMobile && (
            <thead>
              <tr>
                {!isMobile && <th>Language</th>}
                <th>Release Year</th>
                <th>Paradigm</th>
                <th>Typing</th>
                <th>Domain</th>
                <th>Memory safe</th>
                <th>OS</th>
              </tr>
            </thead>
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
