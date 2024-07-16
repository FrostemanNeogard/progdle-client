import styled from "styled-components";

export const Root = styled.div`
  background-color: ${props => props.theme.colors.bg.primary};
  color: ${props => props.theme.colors.tx.primary};
  min-height: 100vh;
  color-scheme: dark;
`;

export const MainContent = styled.main``;
