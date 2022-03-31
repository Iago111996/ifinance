import styled from "styled-components";


interface InputProps {
    inputIsActivetity: boolean;
  };

export const WrapperContent = styled.div`
  width: 100%;

  margin-bottom: 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 2rem;
  font-weight: 500;
  color: var(--title);
  line-height: 1rem;
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.button`
  width: 3rem;
  height: 3rem;

  background-color: var(--shape);

  border-radius: 1.5rem;
  border: none;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.4s ease;

  &:hover {
    background-color: var(--hover_color);
  }
`;

export const WrapperInputSearch = styled.div<InputProps>`
  width: ${({inputIsActivetity}) => inputIsActivetity ? 20 : 3}rem;
  height: 3rem;

  margin-right: 1rem;

  padding: 0.5rem 0; 

  background-color: var(--shape);

  border-radius: 1.5rem;

  transition: all 0.5s ease;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    position: absolute;
    top: 1.5rem;
    right: 5rem;
  }
`;

export const InputSearch = styled.input`
  width: calc(100% - 4rem);
  height: 2rem;

  background-color: var(--shape);

  border: none;
  border-bottom: 1px solid var(--blue);
  outline: none;

  font-size: 1rem;
  font-weight: 400;
  color: var(--text);
`;

export const TitleButton = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--title);
  line-height: 1rem;
`;

