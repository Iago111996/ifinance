import { Item } from "../interfaces/ItemFinanceInterface";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filteListByMoth = (list: Item[], date: string): Item[] => {
  let [year, month] = date.split("-");

  return list.filter(
    (item) => {
      let datet = new Date(item.create_date);
      return datet.getFullYear() === +year && datet.getMonth() + 1 === +month
    }
      
  );
};

export const formatDate = (date: Date): string => {
  let datet = new Date(date);
  let year = datet.getFullYear();
  let month = datet.getMonth() + 1;
  let day = datet.getDate();

  return `${addZeroDate(day)}/${addZeroDate(month)}/${year}`;
};

const addZeroDate = (n: number): string => {
  if (n < 10) {
    return `0${n}`;
  }
  return `${n}`;
};

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split("-");
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junio",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return `${months[+month - 1]} de ${year}`;
};

export const newDateAdjusted = (dateField: string) => {
  let x = dateField.split("/");
  
  return new Date(+x[2], +x[1].replace("0", "") -1, +x[0]);
};
