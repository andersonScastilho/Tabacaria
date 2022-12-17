import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { RequestContext } from "../../contexts/request.context";

import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import LoadingComponent from "../../component/loading/loading.component";

import {
  FilterSelect,
  RequestContainer,
  RequestContent,
  OptionSelect,
  RequestStatus,
  RequestText,
  RequestsContent,
  SpanDescription,
} from "./request.style";
import { db } from "../../config/firebase.config";
import { collection, onSnapshot, query } from "firebase/firestore";

const RequestPage = () => {
  const [request, setRequest] = useState();
  const q = query(collection(db, "Pedidos"));

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const requests = [];
    querySnapshot.forEach((doc) => {
      let data = { ...doc.data(), idFromFirestore: doc.id };
      requests.push(data);
    });
    setRequest(requests);
  });

  const allRequestPendenteFiltredToStats = request?.filter((request) => {
    return request.status !== "Finalizado";
  });
  const requestsPendente = allRequestPendenteFiltredToStats?.sort((a, b) => {
    return a.tableClient - b.tableClient;
  });

  const requestRealizado = request?.filter((request) => {
    return request.status === "Finalizado";
  });

  const requestAllToday = request?.filter((request) => {
    return request.currentDate;
  });

  const [area, setArea] = useState("value1");

  const navigate = useNavigate();

  const handleDetailsPage = (requestId) => {
    navigate(`/pedido/detalhes/${requestId}`);
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
          <OptionSelect value="value1">Pendente</OptionSelect>
          <OptionSelect value="value2">Realizado</OptionSelect>
          <OptionSelect value="value3">Todos</OptionSelect>
        </FilterSelect>
        <RequestsContent>
          {area === "value1"
            ? requestsPendente?.map((request) => (
                <RequestContent key={request.idFromFirestore}>
                  <RequestText>Cliente: {request.nameClient}</RequestText>
                  <RequestText>Mesa: {request.tableClient}</RequestText>
                  <RequestText>Horario {request.currentHors}</RequestText>
                  <RequestStatus status={request.paymentStats}>
                    <SpanDescription>Pagamento: </SpanDescription>
                    {request.paymentStats}
                  </RequestStatus>
                  <RequestStatus status={request.status}>
                    <SpanDescription>Status pedido:</SpanDescription>
                    {request.status}
                  </RequestStatus>
                  <CustomButton
                    onClick={() => handleDetailsPage(request.idFromFirestore)}
                  >
                    Visualizar Pedido
                  </CustomButton>
                </RequestContent>
              ))
            : area === "value2"
            ? requestRealizado?.map((request) => (
                <RequestContent key={request.idFromFirestore}>
                  <RequestText>Nome: {request.nameClient}</RequestText>
                  <RequestText>Mesa: {request.tableClient}</RequestText>
                  <RequestText>Horario {request.currentHors}</RequestText>
                  <RequestStatus status={request.paymentStats}>
                    <SpanDescription>Pagamento: </SpanDescription>
                    {request.paymentStats}
                  </RequestStatus>
                  <RequestStatus status={request.status}>
                    <SpanDescription>Status:</SpanDescription>
                    {request.status}
                  </RequestStatus>
                  <CustomButton
                    onClick={() => handleDetailsPage(request.idFromFirestore)}
                  >
                    Visualizar Pedido
                  </CustomButton>
                </RequestContent>
              ))
            : requestAllToday.map((request) => (
                <RequestContent key={request.idFromFirestore}>
                  <RequestText>Nome: {request.nameClient}</RequestText>
                  <RequestText>Mesa: {request.tableClient}</RequestText>
                  <RequestText>Horario {request.currentHors}</RequestText>
                  <RequestStatus status={request.paymentStats}>
                    <SpanDescription>Pagamento: </SpanDescription>
                    {request.paymentStats}
                  </RequestStatus>
                  <RequestStatus status={request.status}>
                    <SpanDescription>Status:</SpanDescription>
                    {request.status}
                  </RequestStatus>
                  <CustomButton
                    onClick={() => handleDetailsPage(request.idFromFirestore)}
                  >
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
