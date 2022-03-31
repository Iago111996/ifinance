import { Route, Routes, BrowserRouter } from "react-router-dom";

import { RiquireAtuth } from "./contexts/Auth/RiquireAuth";

import { Login } from "./pages/Login";
import { Subscribe } from "./pages/Subscribe";
import { FinanceSystem } from "./pages/FinanceSystem";
import { Attachments } from "./pages/Attachments";

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
          path="/attachments"
          element={
            <RiquireAtuth>
              <Attachments />
            </RiquireAtuth>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </BrowserRouter>
  );
}
