import { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import locale from "antd/es/date-picker/locale/pt_BR";

import api from "../../../hooks/useApi";
import { useNavigate } from "react-router-dom";

import { newDateAdjusted } from "../../../helpers/dateFilter";

import { Item } from "../../../interfaces/ItemFinanceInterface";
import { Category } from "../../../interfaces/CategoryFinanceInterface";

import {
  Content,
  Button,
  Container,
  InputLabel,
  InputTitle,
  ButtonWrapper,
  ButtonNewCategory,
} from "./styles";

import { Select, Input, DatePicker, Modal } from "antd";

import { FormCategory } from "../FormCategory";
import { RadioButtonsType } from "../RadioButton";

interface InputAreaProps {
  onAdd: (newItem: Item) => void;
}

export const InputArea = ({ onAdd }: InputAreaProps) => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState("");
  const [typeField, setTypeField] = useState("deposit");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [load, setLoad] = useState(false);

  // const datet = moment(new Date()).format("DD MM YYYY").replace(/ /g, "/");

  const navigate = useNavigate();

  const handleAddEvent = (event: any) => {
    let errors: string[] = [];
    event.preventDefault();

    if (isNaN(new Date(newDateAdjusted(dateField)).getTime())) {
      errors.push("Data inválida!");
    }
    if (categoryField === "") {
      errors.push("Categoria inválida!");
    }
    if (titleField === "") {
      errors.push("Título vazio!");
    }
    if (+valueField <= 0) {
      errors.push("Valor inválido!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      const objItem = {
        create_date: newDateAdjusted(dateField),
        category: categoryField,
        title: titleField,
        value: +valueField,
        type: typeField === "deposit" && true,
      } as Item;
      onAdd(objItem);
      clearFields();
    }
  };

  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField("");
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const getCategories = async () => {
    try {
      setLoad(true);

      const response = await api.get(`category`);
      setCategoryList(response.data);

      setLoad(false);
    } catch (error: any) {
      if ([401, 405].some((x) => x == error.response.status)) {
        navigate("/");
      }
      setLoad(false);
    }
   
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Container>
      <ButtonNewCategory onClick={showModal}>Adicionar cateroria</ButtonNewCategory>
      <Content>
        <InputLabel>
          <InputTitle>Data</InputTitle>
          <DatePicker
            locale={locale}
            format={"DD/MM/YYYY"}
            onChange={(value, dateString) => setDateField(dateString)}
            style={{ width: "100%" }}
          />
        </InputLabel>

        <InputLabel>
          <InputTitle>Categoria</InputTitle>

          <Select
            placeholder={<span>Selecione</span>}
            defaultValue="Selecione"
            value={categoryField}
            onChange={(value) => setCategoryField(value)}
            style={{ width: "100%" }}
          >
            <>
              {categoryList.map((category, index) => (
                <Select.Option key={index} value={category.key}>
                  {category.name}
                </Select.Option>
              ))}
            </>
          </Select>
        </InputLabel>

        <InputLabel>
          <InputTitle>Título</InputTitle>
          <Input
            id="title"
            name="title"
            type="text"
            value={titleField}
            placeholder="Título"
            onChange={(e) => setTitleField(e.target.value)}
          />
        </InputLabel>

        <InputLabel>
          <InputTitle>Valor</InputTitle>
          <Input
            name="value"
            type="number"
            value={valueField}
            placeholder="Valor"
            onChange={(e) => setValueField(e.target.value)}
          />
        </InputLabel>

        <InputLabel>
          <InputTitle>Tipo</InputTitle>
          <RadioButtonsType type={typeField} setType={setTypeField} />
        </InputLabel>
      </Content>

      <ButtonWrapper>
        <Button onClick={handleAddEvent}>Adicionar</Button>
      </ButtonWrapper>

      <Modal
        title="Adicionar categoria"
        visible={isModalVisible}
        cancelText="Cancelar"
        okText="Salvar"
        onCancel={handleCancel}
        footer={null}
      >
        <FormCategory handleCancel={handleCancel} />
      </Modal>
    </Container>
  );
};
