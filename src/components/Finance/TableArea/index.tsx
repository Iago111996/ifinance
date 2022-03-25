import { Item } from "../../../interfaces/ItemFinanceInterface";
import { TableItem } from "../TableItem";
import { Container, TableHeadComlumn, Content } from "./styles";

interface TableAreaProps {
  list: Item[];
}

export const TableArea = ({ list }: TableAreaProps) => {
  return (
    <Container>
      <Content>
      <thead>
        <tr>
          <TableHeadComlumn width={180}>Data</TableHeadComlumn>
          <TableHeadComlumn width={150}>Categoria</TableHeadComlumn>
          <TableHeadComlumn>Título</TableHeadComlumn>
          <TableHeadComlumn width={150}>Valor</TableHeadComlumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
      </Content>
    </Container>
  );
};
