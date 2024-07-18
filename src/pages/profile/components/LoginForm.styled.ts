import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  row-gap: 1rem;

  label {
    margin-bottom: -0.8rem;
  }

  input {
    border-radius: 10px;
    border: none;
    padding: 0.5rem;
    background-color: white;
    color: ${(props) => props.theme.colors.tx.secondary};
  }

  button {
    color: ${(props) => props.theme.colors.tx.secondary};
    border: none;
    border-radius: 10px;
    padding: 1rem;

    &:hover {
      cursor: pointer;
      filter: brightness(80%);

      &:disabled {
        cursor: initial;
      }
    }
  }
`;

export const LoginButton = styled.button`
  color: ${(props) => props.theme.colors.tx.secondary};
  background-color: ${(props) => props.theme.colors.success};
`;
