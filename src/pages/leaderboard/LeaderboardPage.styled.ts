import styled from "styled-components";

export const UsersList = styled.div`
  display: grid;
  row-gap: 1rem;

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  div {
    border: 1px solid red;

    img {
      aspect-ratio: 1/1;
      height: 100px;
    }
  }
`;
