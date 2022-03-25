import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  background-color: var(--blue);
`;

export const Logo = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  color: var(--shape);

  span {
    font-size: 2rem;
    color: var(--green);
  }
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 0;

  background-color: var(--blue);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBar = styled.nav`
  a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    color: var(--shape);
    cursor: pointer;

    :hover {
      color: var(--green);
    }
  }

  a + a {
    margin-left: 2rem;
  }
`;

export const Profile = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: var(--background);
  cursor: pointer;
`;
