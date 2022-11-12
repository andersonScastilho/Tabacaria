import { useContext } from "react";
import { RequestContext } from "../../contexts/request.context";
import {
  RequestContainer,
  RequestContent,
  RequestStatus,
  RequestText,
} from "./request.style";
import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";

const RequestPage = () => {
  const { request } = useContext(RequestContext);

  return (
    <>
      <Header />
      <RequestContainer>
        {request.map((request) => (
          <RequestContent key={request.id} onClick={() => console.log(request)}>
            <input type="checkbox" />
            <RequestStatus status={request.status}>
              {request.status}
            </RequestStatus>
            <RequestText>Nome: {request.nameClient}</RequestText>
            <RequestText>Mesa: {request.tableClient}</RequestText>
            <RequestText>Preço Pedido R${request.priceTotal}</RequestText>
          </RequestContent>
        ))}
      </RequestContainer>
      <Footer />
    </>
  );
};
export default RequestPage;
