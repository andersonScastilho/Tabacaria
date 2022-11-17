import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { auth } from "./config/firebase.config";
import { UserContext } from "./contexts/user.context";
import { onAuthStateChanged } from "firebase/auth";

import HomePage from "./page/home/home.page";
import LoginPage from "./page/login/login.page";
import { useState } from "react";
import Caixa from "./page/caixa/caixa.page";
import RequestPage from "./page/request/request.page";
import AuthenticationGuard from "./guards/authentication.component";
import DetailsPage from "./page/request-details/detail.page";

const App = () => {
  const [isInitialize, setIsInitialize] = useState(true);
  const { LoginUser, LogoutUser, isAuthenticated } = useContext(UserContext);

  onAuthStateChanged(auth, (user) => {
    const isSignIngOut = isAuthenticated && !user;

    if (isSignIngOut) {
      LogoutUser();
      return setIsInitialize(false);
    }

    const isSignIn = !isAuthenticated && user;

    if (isSignIn) {
      LoginUser(user);
      return setIsInitialize(false);
    }
    return setIsInitialize(false);
  });
  if (isInitialize) return null;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/caixa"
          element={
            <AuthenticationGuard>
              <Caixa />
            </AuthenticationGuard>
          }
        />
        <Route
          path="/pedidos"
          element={
            <AuthenticationGuard>
              <RequestPage />
            </AuthenticationGuard>
          }
        />
        <Route
          path="/pedido/detalhes/:id"
          element={
            <AuthenticationGuard>
              <DetailsPage />
            </AuthenticationGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
