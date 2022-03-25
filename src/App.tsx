import { Route, Routes, BrowserRouter } from "react-router-dom";

import { RiquireAtuth } from "./contexts/Auth/RiquireAuth";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Subscribe } from "./pages/Subscribe";
import { FinanceSystem } from "./pages/FinanceSystem";

export function App() {
  return (
    <BrowserRouter>
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
        <Route path="/" element={<Login />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </BrowserRouter>
  );
}
