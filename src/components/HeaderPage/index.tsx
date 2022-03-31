import { useState } from "react";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Title,
  WrapperButtons,
  WrapperContent,
  Button,
  WrapperInputSearch,
  InputSearch,
} from "./styles";

interface HeaderPageProps {
  title: string;
  textSearch: string;
  setTextSearch: (value: string) => void;
  handleOpenModal: () => void;
}

export const HeaderPage = ({
  title,
  textSearch,
  setTextSearch,
  handleOpenModal,
}: HeaderPageProps) => {
  const [inputIsActivetity, setInputIsActivetity] = useState(false);
  
  return (
    <WrapperContent>
      <Title>{title}</Title>

      <WrapperButtons>
        <WrapperInputSearch inputIsActivetity={inputIsActivetity}>
          <InputSearch
            type="text"
            placeholder="Pesquisar..."
            value={textSearch}
            onChange={(e) => setTextSearch(e.target.value)}
          />

          <Button type="button" onClick={() => setInputIsActivetity((prevItem) => !prevItem)}>
            <SearchOutlined style={{ fontSize: 22, color: "var(--blue)" }} />
          </Button>
        </WrapperInputSearch>

        <Button type="button" onClick={handleOpenModal}>
          <PlusOutlined style={{ fontSize: 22, color: "var(--blue)" }} />
        </Button>
      </WrapperButtons>
    </WrapperContent>
  );
};
