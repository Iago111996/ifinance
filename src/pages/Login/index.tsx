import { LoadingOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

import {
  Container,
  Content,
  WrapperImage,
  WrapperForm,
  NavBar,
  NavButton,
  NavContent,
} from "./styles";

export const Login = () => {
  const [toggleState, setToggleState] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  // const x = (e: React.ChangeEvent<HTMLInputElement>) => {const c = e.target.value}

  const toggleTabs = (index: number) => {
    setToggleState(index);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (email === "") {
        alert("O email é obrigatório!");
        return;
      }

      if (password === "") {
        alert("A senha é obrigatório!");
        return;
      }

      setLoading(true);

      const isLogged = await auth.signin(email, password);

      if (isLogged) {
        setLoading(false);
        navigate("/home");
      } else {
        setLoading(false);
        alert("Algo deu errado!");
      }
    } catch (error: any) {
      alert(error);
    }
  };

  return (
    <Container>
      <Content>
        <WrapperImage>
          <h1>Hora de impulsionar suas finançasa</h1>

          <img src="/img/image_login.svg" alt="Imagem do login" />

          <p>
            O caminho está à frente. Você deu o primeiro passo na transformação
            de toda a sua vida financeira e nós vamos te guiar nessa jornada
          </p>
        </WrapperImage>

        <WrapperForm>
          <NavBar isActive={toggleState === 1}>
            <NavButton
              isActive={toggleState === 1}
              onClick={() => toggleTabs(1)}
            >
              Signin
            </NavButton>

            <NavButton
              isActive={toggleState === 2}
              onClick={() => toggleTabs(2)}
            >
              Register
            </NavButton>

            <div />
          </NavBar>

          <NavContent isActive={toggleState === 1}>1</NavContent>
          <NavContent isActive={toggleState === 2}>2</NavContent>
        </WrapperForm>
      </Content>
    </Container>
  );
};
