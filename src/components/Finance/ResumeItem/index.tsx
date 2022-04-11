import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { Container, Content, Title, Value, WrapperIcon } from "./styles";

interface ResumItemProps {
  title: string;
  value: number;
  isColor?: string;
  backColor?: string;
}

export const ResumItem = ({
  title,
  value,
  isColor,
  backColor,
}: ResumItemProps) => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Value value={isColor}>R$ {value}</Value>
      </Content>

      <WrapperIcon backColor={backColor}>
        {(() => {
          switch (backColor) {
            case "#363F5F":
              return <BankOutlined />;
            case "#33CC95":
              return <ArrowUpOutlined />;
            case "#E52E4D":
              return <ArrowDownOutlined />;
          }
        })()}
      </WrapperIcon>
    </Container>
  );
};
