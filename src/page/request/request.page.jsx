import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { RequestContext } from "../../contexts/request.context";

import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";
import CustomButton from "../../component/custom-button/custom-button.component";

import {
  FilterSelect,
  RequestContainer,
  RequestContent,
  OptionSelect,
  RequestStatus,
  RequestText,
  RequestsContent,
} from "./request.style";

const RequestPage = () => {
  const { request } = useContext(RequestContext);

  const requestPendente = request.filter((request) => {
    return request.status === "pendente";
  });
  const requestRealizado = request.filter((request) => {
    return request.status === "realizado";
  });
  const [area, setArea] = useState("valor1");

  const navigate = useNavigate();

  const handleDetailsPage = (requestId) => {
    navigate(`/detalhes/${requestId}`);
  };

  return (
    <>
      <Header />
      <RequestContainer>
        <FilterSelect
          name="select"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        >
          <OptionSelect value="valor1">Pendente</OptionSelect>
          <OptionSelect value="valor2">Realizado</OptionSelect>
          <OptionSelect value="valor3">Todos</OptionSelect>
        </FilterSelect>
        <RequestsContent>
          {area === "valor1"
            ? requestPendente.map((request) => (
                <RequestContent key={request.id}>
                  <RequestText>Cliente: {request.nameClient}</RequestText>
                  <RequestText>Mesa: {request.tableClient}</RequestText>
                  <RequestText>Preço Pedido R${request.priceTotal}</RequestText>
                  <RequestStatus status={request.status}>
                    <span
                      style={{
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "500",
                        marginRight: "5px",
                      }}
                    >
                      Status:
                    </span>
                    {request.status}
                  </RequestStatus>
                  <CustomButton onClick={() => handleDetailsPage(request.id)}>
                    Visualizar Pedido
                  </CustomButton>
                </RequestContent>
              ))
            : area === "valor2"
            ? requestRealizado.map((request) => (
                <RequestContent key={request.id}>
                  <RequestText>Nome: {request.nameClient}</RequestText>
                  <RequestText>Mesa: {request.tableClient}</RequestText>
                  <RequestText>Preço Pedido R${request.priceTotal}</RequestText>
                  <RequestStatus status={request.status}>
                    <span
                      style={{
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "500",
                        marginRight: "5px",
                      }}
                    >
                      Status:
                    </span>
                    {request.status}
                  </RequestStatus>
                  <CustomButton onClick={() => handleDetailsPage(request.id)}>
                    Visualizar Pedido
                  </CustomButton>
                </RequestContent>
              ))
            : request.map((request) => (
                <RequestContent key={request.id}>
                  <RequestText>Nome: {request.nameClient}</RequestText>
                  <RequestText>Mesa: {request.tableClient}</RequestText>
                  <RequestText>Preço Pedido R${request.priceTotal}</RequestText>
                  <RequestStatus status={request.status}>
                    <span
                      style={{
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "500",
                        marginRight: "5px",
                      }}
                    >
                      Status:
                    </span>
                    {request.status}
                  </RequestStatus>
                  <CustomButton onClick={() => handleDetailsPage(request.id)}>
                    Visualizar Pedido
                  </CustomButton>
                </RequestContent>
              ))}
        </RequestsContent>
      </RequestContainer>
      <Footer />
    </>
  );
};
export default RequestPage;
