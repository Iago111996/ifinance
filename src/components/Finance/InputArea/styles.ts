import styled from "styled-components";

export const Content = styled.div`
  margin-bottom: 2rem;
  /* display: flex;
  align-items: center; */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  /* margin: 0 auto; */

  background-color: var(--shape);

  /* margin-top: 1.2rem;
  padding: 1rem; */

  /* box-shadow: 0px 0px 5px var(--text); */
  /* border-radius: 10px; */
`;

export const InputLabel = styled.label`
  flex: 1;
  margin: 0.5rem;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const InputTitle = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  color: var(--title);
  margin-bottom: .5rem;
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

export const Select = styled.select`
  width: 100%;
  padding: .5rem 1rem;
  border: 1px solid lightblue;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 400;
  color: var(--text);
`;

export const ButtonWrapper = styled.div`
  width: 50%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 2rem;
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

export const ButtonNewCategory = styled.button`
  width: 50%;
  padding: 0.25rem;
  border: 1px solid var(--blue);
  border-radius: 0.3rem;
  background-color: var(--background);
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  color: var(--text);
  transition: 0.2s ease-in;

  &:hover {
    background-color: var(--blue);
    color: var(--shape);
  }

  @media (max-width: 768px) {
    width: 40%;
  }
`;
