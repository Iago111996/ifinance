import { useState, useEffect } from "react";
import { Container } from "./styles";

import { items } from "../../data/items";
import { categories } from "../../data/categories";

import { Item } from "../../interfaces/ItemFinanceInterface";

import { getCurrentMonth, filteListByMoth } from "../../helpers/dateFilter";
import { TableArea } from "../../components/Finance/TableArea";
import { InfoArea } from "../../components/Finance/InfoArea";
import { InputArea } from "../../components/Finance/InputArea";

import axios from "axios";
import api from "../../hooks/useApi";
import { Header } from "../../components/Header";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const FinanceSystem = () => {
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [listItem, setListItem] = useState<Item[]>([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [load, setLoad] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = async (newItem: Item) => {
    setLoad(true);
    setListItem((prevItem) => [...prevItem, newItem]);
    const response = await api.post(`finance/item`, newItem);
    setLoad(false);
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

  const getItem = async () => {
    setLoad(true);
    const response = await api.get(`finance/item`);
    setListItem(response.data);
    setLoad(false);
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <Spin spinning={load} delay={0} indicator={<LoadingOutlined spin />}>
      <Header />
      <Container>
        <InfoArea
          income={income}
          expense={expense}
          currentMonth={currentMonth}
          handleMonthChange={handleMonthChange}
        />

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList} />
      </Container>
    </Spin>
  );
};
