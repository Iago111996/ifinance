import styled from "styled-components";

interface Props {
  color?: string;
}

interface ValueProps {
  type: boolean;
}


export const TableRow = styled.tr`
    td {
    padding: 10px 0;

    font-size: 1rem;
    font-weight: 400;

    color: var(--text);
    text-align: center;

    

    @media screen and (max-width: 520px) {
    /* tbody tr td:nth-child(1){width: 20%} */
        /* tr:nth-child(even){ background-color: #f5f5f5;} */
   
        &::before {
            content: attr(data-label);
            position: absolute;
            left: 0;
            width: 50%
            padding-left: 1rem;
            font-size: 1rem;
            font-weight: bold;
            color: var(--title);
            text-align: right;
        }

        &:last-child {
            margin-bottom: 1rem;
        }
    
    }
    }
`;

export const TableColumn = styled.td``;

export const Category = styled.div<Props>`
  background-color: ${({ color }) => color};
  color: var(--shape);

  display: inline-block;

  padding: 5px 10px;

  border-radius: 5px;
`;

export const Value = styled.div<ValueProps>`
  color: ${({ type }) => (type === true ? "#33CC95" : "#E52E4D")};
`;
