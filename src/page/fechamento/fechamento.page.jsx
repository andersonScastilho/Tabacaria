import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { RequestContext } from "../../contexts/request.context";

const FechamentoPage = () => {
  const { currentUser, isAuthenticated } = useContext(UserContext);
  const { request } = useContext(RequestContext);

  const date = new Date();

  const currentDate = date.toLocaleDateString();
  const currentHors = date.toLocaleTimeString();

  return (
    <>
      <h1>Teste</h1>
    </>
  );
};
export default FechamentoPage;
