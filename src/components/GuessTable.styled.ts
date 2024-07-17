import styled from "styled-components";

export const GuessTablesContainer = styled.div`
  overflow-x: scroll;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: auto 1fr;
  grid-auto-columns: 100%;

  h1 {
    font-size: 2rem;
    text-align: center;
    padding: 1rem;
  }
`;

export const GuessTable = styled.table`
  width: 100%;
  color: white;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;
  height: auto;
  flex: 1;

  @media (width >= ${(props) => props.theme.breakpoints.tablet}) {
    display: grid;
    grid-auto-flow: row;

    thead {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-column: 1 / span all;
    }
  }

  thead {
    justify-self: center;
    align-self: center;
    font-size: 2.5rem;
  }

  tbody {
    @media (width >= ${(props) => props.theme.breakpoints.tablet}) {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: repeat(7, 1fr);
    }

    tr {
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
      row-gap: 1rem;

      @media (width >= ${(props) => props.theme.breakpoints.tablet}) {
        display: grid;
        grid-column: 1 / span all;
        grid-auto-flow: column;
      }

      td {
        text-align: center;
        padding: 0.5rem 1rem;

        &.INCORRECT {
          background-color: ${(props) => props.theme.colors.danger};
        }
        &.CORRECT {
          background-color: ${(props) => props.theme.colors.success};
        }
        &.PARTIAL {
          background-color: ${(props) => props.theme.colors.warning};
        }
        color: ${(props) => props.theme.colors.tx.secondary};
      }
    }

    @media (width < ${(props) => props.theme.breakpoints.tablet}) {
      &:first-of-type {
        td {
          text-align: left;
          background-color: unset;
          color: unset;
        }
      }
    }
  }
`;
