import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useApi } from "../../hooks/useApi";

export const RiquireAtuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);
  const apiAuth = useApi();

   useEffect(() => {
    auth.validateToken();
  }, [children]);

    return auth.signed ? children : <Navigate to="/" />;

};
