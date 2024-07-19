import styled from "styled-components";

export const UsersList = styled.div`
  display: grid;
  gap: 1rem;

  > h1 {
    text-align: center;
    font-size: 3rem;
  }

  > div {
    padding: 2rem;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.bg.secondary};

    > div {
      display: flex;
      align-items: center;
      column-gap: 1rem;
    }

    img {
      aspect-ratio: 1/1;
      height: 3rem;
      border-radius: 50%;
    }

    h1 {
      font-size: 2rem;
      text-align: center;
    }

    h3 {
      font-size: 3rem;
      margin-right: 1rem;
    }

    h2 {
      grid-column: 1 / span 3;
      grid-row: 2;
      font-size: 3rem;
    }
  }
`;
