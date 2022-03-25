import { useContext } from "react";

import { AuthContext } from "../contexts/Auth/AuthContext";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function RouteIndex() {
  const auth = useContext(AuthContext);

  return auth.signed ? <AppRoutes /> : <AuthRoutes />;
}
