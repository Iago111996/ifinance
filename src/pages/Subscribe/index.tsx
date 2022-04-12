import { LoadingOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Subscribe as SubscribeInterface } from "../../interfaces/SubscribeInterface";

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
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  //   const x = (e: React.ChangeEvent<HTMLInputElement>) => {const c = e.target.value}

  const handleLogin = async () => {
    try {
      if (name === "") {
        alert("O nome é obrigatório!");
        return;
      }

      if (email === "") {
        alert("O email é obrigatório!");
        return;
      }

      if (password === "") {
        alert("A senha é obrigatório!");
        return;
      }

      if (confirmPassword === "") {
        alert("O campo Confirmar senha é obrigatório!");
        return;
      }

      setLoading(true);

      const item = {
        UserName: name,
        Email: email,
        Password: password,
        ConfirmPassword: confirmPassword,
      } as SubscribeInterface;

      const response = await auth.register(item);
      if (response === true) {
        setLoading(false);

        navigate("/");
      } else {
        setLoading(false);

        alert("Algo deu errado!!!");
      }
    } catch (error: any) {
      alert(error);
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

        <InputLabel>
          <InputTitle>Confirme sua senha</InputTitle>
          <Input
            type="password"
            value={confirmPassword}
            placeholder="Confirme sua senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </InputLabel>

        <Button onClick={handleLogin}>
          {loading ? (
            <LoadingOutlined style={{ fontSize: 24, color: "var(--title)" }} />
          ) : (
            <span>Cadastrar</span>
          )}
        </Button>
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
