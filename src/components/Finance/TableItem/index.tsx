import { useMemo, useState, SetStateAction } from "react";
import moment from "moment";
import api from "../../../hooks/useApi";
import { useNavigate } from "react-router-dom";

import { categories } from "../../../data/categories";

import { Item } from "../../../interfaces/ItemFinanceInterface";

import { ButtonAction } from "../../ButtonAction";
import { TableRow, Category, Value, Wrapper } from "./styles";
import { Modal } from "antd";
import { InputArea } from "../InputArea";

interface TableItemProps {
  item: Item;
  setListItem: (value: SetStateAction<Item[]>) => void;
}

export const TableItem = ({ item, setListItem }: TableItemProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();

  const categoryField = useMemo(() => {
    const value = categories.find((category) => category.key === item.category);

    return value;
  }, [item]);

  const handleCancelModal = () => {
    setIsModalVisible(false);
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleUpdateItem = async (newItem: Item) => {
    try {
      setLoad(true);

      setListItem((prevItem) => [...prevItem, newItem]);
      await api.post(`finance/item`, newItem);

      setLoad(false);
    } catch (error: any) {
      if ([401, 405].some((x) => x == error.response.status)) {
        navigate("/");
      }
      setLoad(false);
    }
  };

  const handleDeleteItem = async (id: number) => {
    try {
      setLoad(true);

      setListItem((prevItem) => [...prevItem.filter((x) => x.id !== id)]);
      await api.delete(`finance/item/${id}`);

      setLoad(false);
    } catch (error: any) {
      if ([401, 405].some((x) => x == error.response.status)) {
        navigate("/");
      }
      setLoad(false);
    }
  };

  return (
    <TableRow>
      <td data-label="Data">{moment(item.create_date).format("LL")}</td>
      <td data-label="Categoria">
        <Category color={categoryField?.color}>{categoryField?.name}</Category>
      </td>
      <td data-label="Título">{item.title}</td>
      <td data-label="Valor">
        <Value type={item.type}>R$ {item.value}</Value>
      </td>
      <td>
        <Wrapper>
          <ButtonAction title="Editar" whatColor={true} onClick={handleOpenModal} />
          
          <ButtonAction
            title="Excluir"
            whatColor={false}
            onClick={() => handleDeleteItem(item.id)}
          />
        </Wrapper>
      </td>

      <Modal
        title="Editar transação"
        visible={isModalVisible}
        cancelText="Cancelar"
        okText="Salvar"
        onCancel={handleCancelModal}
        footer={null}
      >
        <InputArea onAdd={handleUpdateItem} />
      </Modal>
    </TableRow>
  );
};
