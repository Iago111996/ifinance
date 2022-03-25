import styled from "styled-components";

interface Props {
  value?: string;
}

export const Container = styled.div`
  flex: 1;
  text-align: center;
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
`;

export const Value = styled.h1<Props>`
  padding: 0;
  margin: .5rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ value }) => value ?  value : "#363F5F"};
`;
