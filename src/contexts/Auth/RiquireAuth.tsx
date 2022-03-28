import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

export const RiquireAtuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  return auth.signed ? children : <Navigate to="/" />;
};
