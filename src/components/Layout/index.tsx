import {ReactNode} from "react";
// import { Header } from "../NavBar";
import { Container } from "./styles";

interface LayoutProps {
    children: ReactNode;
};  

export const LayoutAplication = ({children} :LayoutProps ) => {
  return (
    <Container>
      {/* <Header /> */}

      {children}
    </Container>
  );
};
