import { SetStateAction } from "react";
import { Item } from "../../../interfaces/ItemFinanceInterface";
import { TableItem } from "../TableItem";
import {
  Container,
  TableHeadComlumn,
  Content,
  MonthArea,
  MonthArrow,
  MonthTitle,
  WrapperWarning,
  WarningText,
} from "./styles";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { formatCurrentMonth } from "../../../helpers/dateFilter";
import { EyeInvisibleOutlined } from "@ant-design/icons";

interface TableAreaProps {
  list: Item[];
  setListItem: (value: SetStateAction<Item[]>) => void;
  currentMonth: string;
  handleMonthChange: (newMonth: string) => void;
}

export const TableArea = ({
  list,
  setListItem,
  currentMonth,
  handleMonthChange,
}: TableAreaProps) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(+year, +month - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);

    handleMonthChange(
      `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`
    );
  };
  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(+year, +month - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);

    handleMonthChange(
      `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`
    );
  };
  return (
    <Container>
      <MonthArea>
        <MonthArrow type="button" onClick={handlePrevMonth}>
          <FaArrowAltCircleLeft size={32} color="#5429CC" />
        </MonthArrow>

        <MonthTitle>{formatCurrentMonth(currentMonth)}</MonthTitle>

        <MonthArrow type="button" onClick={handleNextMonth}>
          <FaArrowAltCircleRight size={32} color="#5429CC" />
        </MonthArrow>
      </MonthArea>

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
          {list.length > 0 ? (
            <>
              {list.map((item, index) => (
                <TableItem key={index} item={item} setListItem={setListItem} />
              ))}
            </>
          ) : (
            <tr>
              <WrapperWarning>
                <EyeInvisibleOutlined
                  style={{ fontSize: 56, color: "var(--blue)" }}
                />

                <WarningText>Não há arquivos</WarningText>
              </WrapperWarning>
            </tr>
          )}
        </tbody>
      </Content>
    </Container>
  );
};
