import { Route, Routes } from "react-router-dom";

import { Header } from "../components/Header";
import { RiquireAtuth } from "../contexts/Auth/RiquireAuth";
import { FinanceSystem } from "../pages/FinanceSystem";
import { Home } from "../pages/Home";

export function AppRoutes() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/home"
          element={
            <RiquireAtuth>
              <FinanceSystem />
            </RiquireAtuth>
          }
        />
        <Route
          path="/galary"
          element={
            <RiquireAtuth>
              <Home />
            </RiquireAtuth>
          }
        />
      </Routes>
    </>
  );
}
