import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Modal, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import api from "../../hooks/useApi";

import { Item } from "../../interfaces/ItemFinanceInterface";

import { getCurrentMonth, filteListByMoth } from "../../helpers/dateFilter";
import { TableArea } from "../../components/Finance/TableArea";
import { InfoArea } from "../../components/Finance/InfoArea";
import { InputArea } from "../../components/Finance/InputArea";

import { Container } from "./styles";

import { NavBar } from "../../components/NavBar";
import { HeaderPage } from "../../components/HeaderPage";

export const FinanceSystem = () => {
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [listItem, setListItem] = useState<Item[]>([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [load, setLoad] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [textSearch, setTextSearch] = useState("");

  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  const navigate = useNavigate();

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleCancelModal = () => {
    setIsModalVisible(false);
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const getItem = async () => {
    try {
      setLoad(true);

      const response = await api.get(`finance/item`);
      setListItem(response.data);

      setLoad(false);
    } catch (error: any) {
      if ([401, 405].some((x) => x == error.response.status)) {
        navigate("/");
      }
      setLoad(false);
    }
  };

  const handleAddItem = async (newItem: Item) => {
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

  useEffect(() => {
    const incomeCount = filteredList
      .filter((item) => item.type === true)
      .reduce((acc, item) => acc + item.value, 0);
    setIncome(incomeCount);

    const expenseCount = filteredList
      .filter((item) => item.type === false)
      .reduce((acc, item) => acc + item.value, 0);
    setExpense(expenseCount);
  }, [filteredList]);

  useEffect(() => {
    setFilteredList(filteListByMoth(listItem, currentMonth));
  }, [listItem, currentMonth]);

  useEffect(() => {
    getItem();
  }, []);

  return (
    <Spin spinning={load} delay={0} indicator={<LoadingOutlined spin />}>
      <NavBar>
        <Container>
          <HeaderPage
            title="Dashboard"
            textSearch={textSearch}
            setTextSearch={setTextSearch}
            handleOpenModal={handleOpenModal}
          />

          <InfoArea
            income={income}
            expense={expense}
            currentMonth={currentMonth}
            handleMonthChange={handleMonthChange}
          />

          <TableArea list={filteredList} setListItem={setListItem} />
        </Container>
      </NavBar>

      <Modal
        title="Adicionar transação"
        visible={isModalVisible}
        cancelText="Cancelar"
        okText="Salvar"
        onCancel={handleCancelModal}
        footer={null}
      >
        <InputArea onAdd={handleAddItem} />
      </Modal>
    </Spin>
  );
};
