import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";

import { auth } from "./config/firebase.config";
import { UserContext } from "./contexts/user.context";
import { onAuthStateChanged } from "firebase/auth";

import AuthenticationGuard from "./guards/authentication.component";

import HomePage from "./page/home/home.page";
import LoginPage from "./page/login/login.page";
import RequestDetailsPage from "./page/request-details/request-details.page";
import CashierPage from "./page/cashier/cashier.page";
import RequestPage from "./page/request/request.page";
import ProductDetailPage from "./page/product-details/product-details.page";
import ClosurePage from "./page/closure/closure.page";
import CategoryDetailsPage from "./page/category-details/category-details.page";

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
              <CashierPage />
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
              <RequestDetailsPage />
            </AuthenticationGuard>
          }
        />
        <Route
          path="/produto/detalhes"
          element={
            <AuthenticationGuard>
              <ProductDetailPage />
            </AuthenticationGuard>
          }
        />
        <Route
          path="/fechamento"
          element={
            <AuthenticationGuard>
              <ClosurePage />
            </AuthenticationGuard>
          }
        />
        <Route
          path="/category/detalhes/:categoryId/:subCategoryId"
          element={<CategoryDetailsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
