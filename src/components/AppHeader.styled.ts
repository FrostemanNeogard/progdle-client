import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  display: flex;
  padding: 1rem;
  nav {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    a {
      text-decoration: none;
    }
  }
`;

export const Title = styled.h1`
  color: white;
  text-decoration: none;
  font-size: 3rem;
`;

export const ProfilePicture = styled.img`
  border-radius: 100%;
  height: 100px;
  aspect-ration: 1/1;
`;
