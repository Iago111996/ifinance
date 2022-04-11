import styled from "styled-components";

interface Props {
  width?: number;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  min-height: 335px;

  background-color: var(--shape);
  padding: 1rem;

  box-shadow: 0px 0px 5px var(--text);
  border-radius: 10px;
`;

export const Content = styled.table`
  width: 100%;

  padding: 1rem;

  border-radius: 10px;

  position: relative;

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

export const WrapperWarning = styled.div`
  width: 100%;

  background-color: var(--shape);

  border-radius: 1rem;

  padding: 1rem 0;

  text-align: center;

  position: absolute;
  top: 5rem;
`;

export const WarningText = styled.h1`
  padding: 0;
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text);
  line-height: 1rem;
`;

export const TableHeadComlumn = styled.th<Props>`
  width: ${({ width }) => (width ? width : "auto")};
  padding: 10px 0;

  color: var(--title);
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
`;

export const MonthArea = styled.section`
  flex: 1;
  display: flex;
  align-items: center;

  margin: 1rem 3rem;

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

  font-size: 1.3rem;
  font-weight: 500;
  color: var(--text);
  text-align: center;
`;
