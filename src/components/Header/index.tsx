import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Container, Content, Logo, NavBar, Profile } from "./styles";

export const Header = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignout = () => {
    auth.signout();
    navigate("/");
    window.location.href = window.location.href;
  };

  return (
    <Container>
      <Content>
      <Logo>
        <span>P</span>ortifólio
      </Logo>

      <NavBar>
        <Link to="/home">Finaças</Link>
        <Link to="/home">Galeria</Link>
      </NavBar>

      <Profile onClick={handleSignout}>Sair</Profile>
      </Content>
    </Container>
  );
};
