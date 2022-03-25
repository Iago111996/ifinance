import { useState } from "react";
import { DatePicker, Input, Select, Spin } from "antd";
import { Container, InputLabel, InputTitle, Button } from "./styles";

import "moment/locale/pt-br";
import locale from "antd/es/date-picker/locale/pt_BR";
import { colors } from "../../../data/colors";
import { newDateAdjusted } from "../../../helpers/dateFilter";
import { Category } from "../../../interfaces/CategoryFinanceInterface";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import api from "../../../hooks/useApi";

interface FormCategoryPros {
  handleCancel: () => void;
}

export const FormCategory = ({ handleCancel }: FormCategoryPros) => {
  const [key, setKey] = useState("");
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [date, setDate] = useState("");

  const [load, setLoad] = useState(false);

  const handleAddEvent = (event: any) => {
    let errors: string[] = [];
    event.preventDefault();

    if (isNaN(new Date(newDateAdjusted(date)).getTime())) {
      errors.push("Data inválida!");
    }
    if (key === "") {
      errors.push("Chave vazio!");
    }
    if (name === "") {
      errors.push("Nome vazio!");
    }
    if (color === "") {
      errors.push("Cor vazia!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      const objItem = {
        key,
        name,
        color,
        create_date: newDateAdjusted(date),
      } as Category;
      
      handleAddItem(objItem);

      clearFields();
    }
  };

  const handleAddItem = async (newItem: Category) => {
    setLoad(true);
    const response = await api.post(`category`, newItem);
    setLoad(false)
  };

  const clearFields = () => {
    setKey("");
    setName("");
    setColor("");
    setDate("");
    handleCancel();
  };

  return (
    <Spin spinning={load} delay={0} indicator={<LoadingOutlined spin />}>
    <Container>
      <InputLabel>
        <InputTitle>Data</InputTitle>
        <DatePicker
          locale={locale}
          format={"DD/MM/YYYY"}
          onChange={(value, dateString) => setDate(dateString)}
          style={{ width: "100%" }}
        />
      </InputLabel>

      <InputLabel>
        <InputTitle>Chave</InputTitle>
        <Input
          id="title"
          name="title"
          type="text"
          value={key}
          placeholder="Título"
          onChange={(e) => setKey(e.target.value)}
        />
      </InputLabel>

      <InputLabel>
        <InputTitle>Name</InputTitle>
        <Input
          id="title"
          name="title"
          type="text"
          value={name}
          placeholder="Título"
          onChange={(e) => setName(e.target.value)}
        />
      </InputLabel>

      <InputLabel>
        <InputTitle>Cor</InputTitle>

        <Select value={color} onChange={(value) => setColor(value)} style={{ width: "100%" }}>
          <>
            {colors.map((color, index) => (
              <Select.Option key={index} value={color}>
                <span style={{ color: color }}>{color}</span>
              </Select.Option>
            ))}
          </>
        </Select>
      </InputLabel>

      <Button type="button" onClick={handleAddEvent}>
        Adicionar
      </Button>
    </Container>
    </Spin>
  );
};
