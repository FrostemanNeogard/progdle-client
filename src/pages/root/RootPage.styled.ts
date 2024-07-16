import styled from "styled-components";

export const Root = styled.div`
  background-color: ${(props) => props.theme.colors.bg.primary};
  color: ${(props) => props.theme.colors.tx.primary};
  font-family: "Montserrat";
  min-height: 100vh;
  color-scheme: dark;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  display: flex;
  height: 100%;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
`;
