import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    /* background: red; */
`;

export const InputLabel = styled.label`
  /* flex: 1; */
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const InputTitle = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  color: var(--title);
  margin: .5rem 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: .5rem 1rem;
  border: 1px solid lightblue;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 400;
  color: var(--text);
`;

export const Button = styled.button`
  width: 100%;
  height: 2rem;
  margin-top: 2rem;
  padding: 0 5px;
  border: 1px solid var(--blue);
  border-radius: 5px;
  background-color: var(--background);
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  transition: 0.2s ease-in;

  &:hover {
    background-color: var(--blue);
    color: var(--shape);
  }
`;