import styled from "styled-components";

export const GuessTable = styled.table`
  width: 100%;
  color: white;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;

  thead {
    justify-self: center;
    align-self: center;
    grid-column: 1 / span all;
    font-size: 2.5rem;
  }

  tr {
    display: flex;
    flex-direction: column;
    th {
      justify-self: flex-start;
      text-align: left;
    }

    td {
      text-align: center;
    }
  }
`;
