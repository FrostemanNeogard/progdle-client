import styled from "styled-components";

export const GuessForm = styled.form`
  margin-top: auto;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const GuessInput = styled.input`
  width: 65%;
  background-color: ${props => props.theme.colors.bg.white};
  border-radius: 9999px;
  padding: 0.5rem 1rem;
`;

export const GuessButton = styled.button`
  width: 30%;
  background-color: ${props => props.theme.colors.success};
  border: none;
  color: ${props => props.theme.colors.tx.secondary};
  border-radius: 9999px;
`;
