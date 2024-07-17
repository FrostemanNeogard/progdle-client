import styled from "styled-components";

export const GuessTable = styled.table`
  width: 100%;
  color: white;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  row-gap: 1rem;
  height: auto;
  flex: 1;

  thead {
    justify-self: center;
    align-self: center;
    grid-column: 1 / span all;
    font-size: 2.5rem;
  }

  tbody {
    tr {
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
      row-gap: 1rem;

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

    &:first-of-type {
      td {
        text-align: left;
        background-color: unset;
        color: unset;
      }
    }
  }
`;
