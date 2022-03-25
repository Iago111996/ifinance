import { Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import { Subscribe } from "../pages/Subscribe";

export function AuthRoutes() {
  return (
      <Routes>
         <Route path="/" element={<Login />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
  );
}
