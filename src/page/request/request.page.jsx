import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { RequestContext } from "../../contexts/request.context";

import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";

import {
  FilterSelect,
  RequestContainer,
  RequestContent,
  OptionSelect,
  RequestStatus,
  RequestText,
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
    navigate(`/details/${requestId}`);
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

        {area === "valor1"
          ? requestPendente.map((request) => (
              <RequestContent
                key={request.id}
                onClick={() => handleDetailsPage(request.id)}
              >
                <RequestStatus status={request.status}>
                  {request.status}
                </RequestStatus>
                <RequestText>Nome: {request.nameClient}</RequestText>
                <RequestText>Mesa: {request.tableClient}</RequestText>
                <RequestText>Preço Pedido R${request.priceTotal}</RequestText>
              </RequestContent>
            ))
          : area === "valor2"
          ? requestRealizado.map((request) => (
              <RequestContent
                key={request.id}
                onClick={() => handleDetailsPage(request.id)}
              >
                <RequestStatus status={request.status}>
                  {request.status}
                </RequestStatus>
                <RequestText>Nome: {request.nameClient}</RequestText>
                <RequestText>Mesa: {request.tableClient}</RequestText>
                <RequestText>Preço Pedido R${request.priceTotal}</RequestText>
              </RequestContent>
            ))
          : request.map((request) => (
              <RequestContent
                key={request.id}
                onClick={() => handleDetailsPage(request.id)}
              >
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
