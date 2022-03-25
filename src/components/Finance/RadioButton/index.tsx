import { RadioBox, TransactionTypeContainer } from "./styles";

interface RadioButtonProps {
  type: string;
  setType: (type: string) => void;
}

export const RadioButtonsType = ({ type, setType }: RadioButtonProps) => {
  return (
    <TransactionTypeContainer>
      <RadioBox
        type="button"
        isActivity={type === "deposit"}
        activityColor="green"
        onClick={() => setType("deposit")}
      >
        {/* <img src={IncomeImg} alt="Entrada" /> */}

        <span>Entradas</span>
      </RadioBox>

      <RadioBox
        type="button"
        isActivity={type === "withdraw"}
        activityColor="red"
        onClick={() => setType("withdraw")}
      >
        {/* <img src={OutcomeImg} alt="Saída" /> */}

        <span>Saída</span>
      </RadioBox>
    </TransactionTypeContainer>
  );
};
