import styled from "styled-components";

export const HomeContent = styled.div`
  margin-block: auto;

  p {
    font-size: 2rem;
    margin-block: 2rem;
    text-align: center;
  }

  div {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);

    a, button {
      border-radius: 5px;
      background-color: gray;
      padding: 1rem;
      color: ${(props) => props.theme.colors.tx.secondary};
      text-decoration: none;
      text-align: center;
      tansition: all 200ms ease-in-out;

      &:hover {
        cursor: pointer;
        filter: brightness(90%);
      }
    }
    
    button {
      border: none;
      grid-column: span 2;
    }

    a {
      &:first-of-type {
        background-color: ${(props) => props.theme.colors.success};
        grid-column: 1 / span 2;
      }
    }
  }
`;
