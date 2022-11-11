import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CategoryContextProvider from "./contexts/categories.context";
import UserContextProvider from "./contexts/user.context";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import CaixaContextProvider from "./contexts/caixa.context";

const options = {
  position: positions.TOP_LEFT,
  timeout: 2500,
  transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CategoryContextProvider>
      <UserContextProvider>
        <CaixaContextProvider>
          <AlertProvider template={AlertTemplate} {...options}>
            <App />
          </AlertProvider>
        </CaixaContextProvider>
      </UserContextProvider>
    </CategoryContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
