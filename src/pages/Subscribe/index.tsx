import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

import {
  Container,
  Title,
  Content,
  Input,
  InputLabel,
  Button,
  InputTitle,
  Footer,
  AlertMessage,
  ButtonNewAcount,
} from "./styles";

export const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  //   const x = (e: React.ChangeEvent<HTMLInputElement>) => {const c = e.target.value}

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate("/home");
      } else {
        alert("Não deu certo!");
      }
    }
  };

  return (
    <Container>
      <Title>Cadastrar</Title>

      <Content>
        <InputLabel>
          <InputTitle>Seu Nome</InputTitle>
          <Input
            type="text"
            value={name}
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </InputLabel>

        <InputLabel>
          <InputTitle>Seu e-mail</InputTitle>
          <Input
            type="text"
            value={email}
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputLabel>

        <InputLabel>
          <InputTitle>Sua senha</InputTitle>
          <Input
            type="password"
            value={password}
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputLabel>

        <Button onClick={handleLogin}>Cadastrar</Button>
      </Content>

      <Footer>
        <AlertMessage>Já tem uma conta?</AlertMessage>

        <ButtonNewAcount>
          <Link to="/">Logar</Link>
        </ButtonNewAcount>
      </Footer>
    </Container>
  );
};
