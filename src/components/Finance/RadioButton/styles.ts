import styled from "styled-components";

interface RadioBoxProps {
    isActivity: boolean;
    activityColor: "green" | "red";
  }
  
  const colors = {
    green: "rgba(51,204,149,.5)",
    red: "rgba(229,46,77,.5)",
  };
  

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

export const RadioBox = styled.button<RadioBoxProps>`
  padding: .25rem 1rem;

  border: 1px solid var(--border);
  border-radius: 0.25rem;

  background: ${({ isActivity, activityColor }) =>
    isActivity ? (colors[activityColor]) : "transparent"};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color:  "#d7d7d7";
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;

    font-size: 1rem;
    color: var(--text-title);
  }
`;
