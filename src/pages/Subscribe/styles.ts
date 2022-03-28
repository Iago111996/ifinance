import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  max-width: 500px;

  margin: 4rem auto;

  box-shadow: 0px 0px 5px var(--text);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 992px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Content = styled.div`
  width: 80%;

  /* margin: 1rem 0; */

  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: var(--red); */
`;

export const InputLabel = styled.label`
  width: 100%;
  flex: 1;
  margin: 0.5rem 0;
`;

export const InputTitle = styled.h1`
  padding: 0;
  margin: 0.5rem 0;
  font-size: .9rem;
  font-weight: 500;
  color: var(--title);
`;

export const Input = styled.input`
  width: 100%;
  padding: .4rem .5rem;
  border: 1px solid lightblue;
  border-radius: 5px;
  font-size: .9rem;
  font-weight: 400;
  color: var(--text);
`;
export const Title = styled.h1`
  margin-top: 2rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--title);
`;


export const Button = styled.button`
  width: 100%;
  margin-top: 2rem;
  padding: 0.4rem;
  border: 1px solid var(--blue);
  border-radius: 0.3rem;
  background-color: var(--background);
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  color: var(--text);
  transition: 0.4s ease-in;

  &:hover {
    background-color: var(--blue);
    color: var(--shape);
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  background-color: var(--background);

  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  display: flex;
  /* flex-direction: row; */
  align-items: center;
  justify-content: space-between;

  @media (max-width: 560px) {
    flex-direction: column;

    button {
      width: 90%;
      margin: 0.5rem auto;
    }
  }
`;

export const AlertMessage = styled.p`
  padding: 0;
  margin-right: 1rem;
  font-size: .9rem;
  font-weight: 400;
  color: var(--text);
`;

export const ButtonNewAcount = styled.button`
  width: 30%;
  margin-right: 1rem;
  padding: 0.25rem;
  border: 1px solid var(--blue);
  border-radius: 0.3rem;
  background-color: var(--background);
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: bold;
  color: var(--text);
  transition: 0.2s ease-in;

  &:hover {
    background-color: var(--blue);
    color: var(--shape);
  }

  a {
    font-size: 0.9rem;
    font-weight: bold;
    color: var(--text);
    transition: 0.2s ease-in;
    text-decoration: none;
    &:hover {
      background-color: var(--blue);
      color: var(--shape);
    }
  }
`;
