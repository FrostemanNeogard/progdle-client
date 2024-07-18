import styled from "styled-components";

export const Form = styled.form`
  display: grid;
`;

export const LoginButton = styled.button`
  color: ${(props) => props.theme.colors.tx.secondary};
  background-color: ${(props) => props.theme.colors.success};
`;
