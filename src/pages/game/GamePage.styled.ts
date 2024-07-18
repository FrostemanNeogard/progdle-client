import styled from "styled-components";

export const GuessCount = styled.h2`
  font-size: 1.25rem;
  margin-top: 1rem;
  text-align: center;
`;

export const InstructionHeading = styled.p`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.75rem;
`;

export const NavBar = styled.nav`
  width: 100%;
  padding-block: 1rem;
  display: grid;
  grid-auto-flow: column;
  column-gap: 1rem;
  margin-top: auto;

  button {
    font-size: 2rem;
    padding: 1rem;
  }
`;
