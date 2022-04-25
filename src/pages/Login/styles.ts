import styled from "styled-components";

interface Props {
  isActive: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 70%;

  margin: 0 auto;
  margin-top: 7rem;

  display: flex;
  flex-direction: row;
  /* align-items: center; */
`;

export const WrapperImage = styled.div`
  width: 50%;

  text-align: center;

  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 800;
    font-size: 1.8rem;
    color: var(--title);

    margin-bottom: 2rem;
  }

  img {
    width: 25rem;
    height: 20rem;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: var(--text);

    text-align: center;

    margin-top: 1rem;
  }
`;

export const WrapperForm = styled.div`
  width: 50%;

  text-align: center;
`;

export const NavBar = styled.nav<Props>`
  width: 70%;

  margin: 0 auto;

  div {
    width: 50%;

    margin-left: ${({ isActive }) => (!isActive ? 50 : 0)}%;

    border-radius: 16px;
    border-bottom: 2px solid var(--blue);
    transition: margin-left .5s ease;
  }
`;

export const NavButton = styled.button<Props>`
  width: 50%;

  background-color: transparent;

  padding: 0.5rem 0;

  border: none;

  cursor: pointer;

  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: var(--title);
  text-transform: uppercase;
  transition: background-color .5s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const NavContent = styled.article<Props>`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;

export const Form = styled.form``;

export const InputLabel = styled.label``;

export const InputTitle = styled.h1``;

export const Input = styled.input``;

export const Title = styled.h1``;

export const Button = styled.button``;

export const Footer = styled.footer``;

export const AlertMessage = styled.p``;

export const ButtonNewAcount = styled.button``;
