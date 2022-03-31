import styled from "styled-components";

interface Props {
  whatColor: boolean;
}

export const Container = styled.button<Props>`
  width: 48%;

  background-color: ${({ whatColor }) => (whatColor ? "var(--green)" : "var(--red)")};
  padding: 0.2rem 0.5rem;

  border-radius: 3px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  span {
    font-size: 0.8rem;
    font-weight: bold;
    color: var(--shape);
    
    margin-left: .3rem;
  }
`;
