import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/header/header.component";
import LoadingComponent from "../component/loading/loading.component";
import { UserContext } from "../contexts/user.context";

const AuthenticationGuardCashier = ({ children }) => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser !== "userTeste@gmail.com") {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, []);
  if (currentUser !== "userTeste@gmail.com") {
    return (
      <>
        <Header />
        <LoadingComponent message="você não tem permissão para acessar essa pagina" />
      </>
    );
  }
  return <>{children}</>;
};
export default AuthenticationGuardCashier;
