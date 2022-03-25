import {
  Container,
  MonthArea,
  MonthArrow,
  MonthTitle,
  ResumeArea,
} from "./styles";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { formatCurrentMonth } from "../../../helpers/dateFilter";
import { ResumItem } from "../ResumeItem";

interface InfoAreaProps {
  income: number;
  expense: number;
  currentMonth: string;
  handleMonthChange: (newMonth: string) => void;
}

export const InfoArea = ({
  income,
  expense,
  currentMonth,
  handleMonthChange,
}: InfoAreaProps) => {
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
          <FaArrowAltCircleLeft size={24} color="#5429CC" />
        </MonthArrow>

        <MonthTitle>{formatCurrentMonth(currentMonth)}</MonthTitle>

        <MonthArrow type="button" onClick={handleNextMonth}>
          <FaArrowAltCircleRight size={24} color="#5429CC" />
        </MonthArrow>
      </MonthArea>

      <ResumeArea>
        <ResumItem title="Recitas" value={income} />
        <ResumItem title="Despesas" value={expense} />
        <ResumItem
          title="Balanço"
          value={income - expense}
          isColor={income - expense >= 0 ? "#33CC95" : "#E52E4D"}
        />
      </ResumeArea>
    </Container>
  );
};
