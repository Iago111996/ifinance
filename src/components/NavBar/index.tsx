import {
  AreaChartOutlined,
  LogoutOutlined,
  MenuOutlined,
  PieChartOutlined,
  SettingOutlined,
  UserOutlined,
  UserSwitchOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import { useContext, useState, ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import {
  Container,
  Content,
  Logo,
  Nav,
  Profile,
  LogoContent,
  WrapperLogo,
  WrapperProfile,
  Name,
  Email,
  ProfileDetails,
  ButtonMenu,
  WrapperChildren,
} from "./styles";

interface HeaderProps {
  children: ReactNode;
}

export const NavBar = ({ children }: HeaderProps) => {
  const [isActive, setIsActive] = useState(false);

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignout = () => {
    auth.signout();
    navigate("/");
    window.location.href = window.location.href;
  };

  return (
    <Container active={isActive}>
      <Content active={isActive}>
        <LogoContent>
          <WrapperLogo active={isActive}>
            <PieChartOutlined style={{ fontSize: 28, color: "#363F5F", marginRight: 8 }} />

            <Logo>
              <span>IF</span>inances
            </Logo>
          </WrapperLogo>

          <ButtonMenu active={isActive} onClick={() => setIsActive((prevItem) => !prevItem)}>
            <MenuOutlined className="btn" />
          </ButtonMenu>
        </LogoContent>

        <Nav active={isActive}>
          <ul>
            <li>
              <Link to="/home">
                <WindowsOutlined className="icon-item" />
                <span className="link-name">Dashboard</span>
              </Link>

              <p className="tootrip">Dashboard</p>
            </li>

            <li>
              <Link to="/attachments">
                <AreaChartOutlined className="icon-item" />
                <span className="link-name">Galeria</span>
              </Link>

              <p className="tootrip">Anexos</p>
            </li>

            <li>
              <Link to="/home">
                <UserSwitchOutlined className="icon-item" />
                <span className="link-name">Clientes</span>
              </Link>

              <p className="tootrip">Clientes</p>
            </li>

            <li>
              <Link to="/home">
                <SettingOutlined className="icon-item" />
                <span className="link-name">Configurações</span>
              </Link>

              <p className="tootrip">Configurações</p>
            </li>

            <li>
              <button className="btn" onClick={handleSignout}>
                <LogoutOutlined className="icon-item" />
                <span className="link-name">Sair</span>
              </button>

              <p className="tootrip">Sair</p>
            </li>
          </ul>
        </Nav>

        <WrapperProfile active={isActive}>
          <Profile>
            <UserOutlined className="icon-user" />

            <ProfileDetails active={isActive}>
              <Name>Iago pinto</Name>
              <Email>Email12gmail.com</Email>
            </ProfileDetails>
          </Profile>
        </WrapperProfile>
      </Content>

      <WrapperChildren active={isActive}>{children}</WrapperChildren>
    </Container>
  );
};
