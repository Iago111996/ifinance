import { Container, Title, Value } from "./styles";

interface ResumItemProps {
  title: string;
  value: number;
  isColor?: string;
}

export const ResumItem = ({ title, value, isColor }: ResumItemProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Value value={isColor}>R$ {value}</Value>
    </Container>
  );
};
