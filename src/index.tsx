import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);