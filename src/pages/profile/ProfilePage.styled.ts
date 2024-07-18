import styled from "styled-components";

export const Profile = styled.div`
  display: grid;
  row-gap: 1rem;

  h1 {
    font-size: 3rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      aspect-ratio: 1/1;
      height: 4rem;
      border-radius: 50%;
    }
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

export const ProfileForm = styled.form`
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
`;

export const LogoutButton = styled.button`
  background-color: ${(props) => props.theme.colors.danger};
`;

export const SaveButton = styled.button`
  background-color: ${(props) => props.theme.colors.success};
`;

export const CancelButton = styled.button`
  background-color: ${(props) => props.theme.colors.danger};
`;
