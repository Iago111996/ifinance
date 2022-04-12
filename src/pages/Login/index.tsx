import { LoadingOutlined } from "@ant-design/icons";
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

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  // const x = (e: React.ChangeEvent<HTMLInputElement>) => {const c = e.target.value}

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
      <Title>Login</Title>

      <Content onSubmit={(e) => handleLogin(e)}>
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

        <Button type="submit">
          {loading ? (
            <LoadingOutlined style={{ fontSize: 24, color: "var(--title)" }} />
          ) : (
            <span>Logar</span>
          )}
        </Button>
      </Content>

      <Footer>
        <AlertMessage>Ainda não tem uma conta?</AlertMessage>

        <ButtonNewAcount>
          <Link to="/subscribe">Cadastre-se</Link>
        </ButtonNewAcount>
      </Footer>
    </Container>
  );
};
