import { Container } from "./styles";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

interface ButtonActionProps {
  title: string;
  whatColor: boolean;
  onClick?: () => void;
}

export const ButtonAction = ({ title, whatColor, onClick }: ButtonActionProps) => {
  return (
    <Container onClick={onClick} whatColor={whatColor}>
      {whatColor ? <EditOutlined /> : <DeleteOutlined />}
      <span>{title}</span>
    </Container>
  );
};
