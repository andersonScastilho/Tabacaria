import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/header/header.component";
import LoadingComponent from "../component/loading/loading.component";
import { UserContext } from "../contexts/user.context";

const AuthenticationGuard = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [isAuthenticated]);
  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <LoadingComponent message="Você precisa estar logado para acessar esta pagina." />
      </>
    );
  }
  return <>{children}</>;
};
export default AuthenticationGuard;
