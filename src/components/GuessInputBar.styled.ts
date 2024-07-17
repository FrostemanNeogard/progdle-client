import styled from "styled-components";

export const GuessForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  column-gap: 1rem;

  input,
  button {
    font-size: 1.5rem;
  }
`;

export const GuessInput = styled.input`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.white};
  border-radius: 9999px;
  padding: 1rem 2rem;
  color: ${(props) => props.theme.colors.tx.secondary};
`;

export const GuessButton = styled.button`
  width: 30%;
  background-color: ${(props) => props.theme.colors.success};
  padding-inline: 1rem;
  border: none;
  color: ${(props) => props.theme.colors.tx.secondary};
  border-radius: 9999px;
`;
