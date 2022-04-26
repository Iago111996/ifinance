import styled, { css } from "styled-components";

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

  /* background-color: red; */
`;

export const WrapperInputs = styled.div`
  width: 80%;

  margin: 0 auto;

  display: flex;

  overflow: hidden;
`;

export const NavBar = styled.nav<Props>`
  width: 60%;

  margin: 0 auto;

  div {
    width: 50%;

    margin-left: ${({ isActive }) => (!isActive ? 50 : 0)}%;

    border-radius: 16px;
    border-bottom: 2px solid var(--blue);
    transition: margin-left 0.5s ease;
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
  transition: background-color 0.5s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const NavContent = styled.article<Props>`
  min-width: 100%;

  padding: 3rem 1rem;

  transition: all 0.5s ease;

  ${({ isActive }) =>
    isActive
      ? css`
          transform: translate(0%);
        `
      : css`
          transform: translate(-100%);
        `};

  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;

  margin-bottom: 1rem;

  padding: 0.8rem 0.5rem;

  border: none;
  border-bottom: 0.5px solid var(--text);

  outline: none;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: var(--text);
`;

export const Button = styled.button`
  background-color: var(--shape);

  margin-top: 2rem;

  padding: 0.5rem;

  border: 1px solid var(--blue);
  border-radius: 1rem;

  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--blue);

  transition: all .8s ease;

  cursor: pointer;

  &:hover {
    background-color: var(--blue);
    color: var(--shape);
  }
`;
