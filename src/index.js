import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CategoryContextProvider from "./contexts/categories.context";
import UserContextProvider from "./contexts/user.context";
import CashierContextProvider from "./contexts/cashier.context";
import RequestContextProvider from "./contexts/request.context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CategoryContextProvider>
      <UserContextProvider>
        <CashierContextProvider>
          <RequestContextProvider>
            <ChakraProvider>
              <App />
            </ChakraProvider>
          </RequestContextProvider>
        </CashierContextProvider>
      </UserContextProvider>
    </CategoryContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
