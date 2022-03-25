import { useMemo } from "react";
import moment from "moment";
import { categories } from "../../../data/categories";
import { formatDate } from "../../../helpers/dateFilter";

import { Item } from "../../../interfaces/ItemFinanceInterface";

import { TableRow, Category, Value } from "./styles";

interface TableItemProps {
  item: Item;
}

export const TableItem = ({ item }: TableItemProps) => {
  const categoryField = useMemo(() => {
    const value = categories.find(
      (category) => category.key === item.category
    );

    return value;
  }, [item]);
  return (
    <TableRow>
      <td data-label="Data">{moment(item.create_date).format("LL")}</td>
      <td data-label="Categoria">
        <Category color={categoryField?.color}>{categoryField?.name}</Category>
      </td>
      <td data-label="Título">{item.title}</td>
      <td data-label="Valor" >
        <Value type={item.type}>R$ {item.value}</Value>
      </td>
    </TableRow>
  );
};
