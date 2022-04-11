import { Container, ResumeArea } from "./styles";

import { ResumItem } from "../ResumeItem";

interface InfoAreaProps {
  income: number;
  expense: number;
}

export const InfoArea = ({ income, expense }: InfoAreaProps) => {
  return (
    <Container>
      <ResumeArea>
        <ResumItem
          title="Balanço"
          value={income - expense}
          isColor={income - expense >= 0 ? "#33CC95" : "#E52E4D"}
          backColor={"#363F5F"}
        />

        <ResumItem
          title="Recitas"
          value={income}
          backColor={"#33CC95"}
        />

        <ResumItem
          title="Despesas"
          value={expense}
          backColor={"#E52E4D"}
        />
      </ResumeArea>
    </Container>
  );
};
