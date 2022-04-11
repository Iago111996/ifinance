import styled from "styled-components";

interface Props {
  value?: string;
  backColor?: string;
}

export const Container = styled.div`
  background-color: var(--shape);

  margin-bottom: 1rem;
  padding: 1rem;

  box-shadow: 0px 0px 5px var(--text);
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Content = styled.div`
 
`;

export const WrapperIcon = styled.div<Props>`
  width: 3.5rem;
  height: 3.5rem;

  border-radius: 1.8rem;

  background-color: ${({ backColor }) => (backColor ? backColor : "#363F5F")}; ;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  color: var(--shape);
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
`;

export const Value = styled.h1<Props>`
  padding: 0;
  margin: 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ value }) => (value ? value : "#363F5F")};
`;
