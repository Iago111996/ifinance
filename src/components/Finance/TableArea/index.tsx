import { SetStateAction } from "react";
import { Item } from "../../../interfaces/ItemFinanceInterface";
import { TableItem } from "../TableItem";
import { Container, TableHeadComlumn, Content } from "./styles";

interface TableAreaProps {
  list: Item[];
  setListItem: (value: SetStateAction<Item[]>) => void;
}

export const TableArea = ({ list, setListItem }: TableAreaProps) => {
  return (
    <Container>
      <Content>
      <thead>
        <tr>
          <TableHeadComlumn width={180}>Data</TableHeadComlumn>
          <TableHeadComlumn width={150}>Categoria</TableHeadComlumn>
          <TableHeadComlumn>Título</TableHeadComlumn>
          <TableHeadComlumn width={150}>Valor</TableHeadComlumn>
          <TableHeadComlumn width={170}>Ações</TableHeadComlumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} setListItem={setListItem} />
        ))}
      </tbody>
      </Content>
    </Container>
  );
};
