import styled from "styled-components";

interface Props {
  width?: number;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;

  background-color: var(--shape);
  padding: 1rem;

  margin-top: 1.2rem;

  box-shadow: 0px 0px 5px var(--text);
  border-radius: 10px;
`;

export const Content = styled.table`
  width: 100%;

  padding: 1rem;

  border-radius: 10px;

  @media screen and (max-width: 580px) {
    /* tbody tr td:nth-child(1){width: 20%} */
      /* tr:nth-child(even){ background-color: #f5f5f5;} */
      thead {
        display: none;
      }

      tbody tr td {
        display: block;
        width: 100%;
      }

      td {
        text-align: right;
        padding-left: 50%;
        position: relative;
      }
   
  }
`;

export const TableHeadComlumn = styled.th<Props>`
  width: ${({ width }) => (width ? width : "auto")};
  padding: 10px 0;

  color: var(--title);
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
`;
