import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;

  background-color: var(--shape);

  margin-top: 1.2rem;
  padding: 1rem;

  box-shadow: 0px 0px 5px var(--text);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MonthArea = styled.section`
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 1.5rem;
  }
`;

export const MonthArrow = styled.button`
  width: 2.5rem;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;

  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const ResumeArea = styled.section`
  flex: 2;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
