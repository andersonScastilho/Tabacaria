import { useContext } from "react";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { BiX, BiCheck } from "react-icons/bi";

import { db } from "../../config/firebase.config";
import { doc, updateDoc } from "firebase/firestore";
import { RequestContext } from "../../contexts/request.context";

import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";

import {
  DataRequestContainer,
  DataRequestText,
  DetailsRequestContainer,
  DetailsRequestContent,
} from "./details.style";

const DetailsPage = () => {
  const { request } = useContext(RequestContext);
  const { id } = useParams();
  const alert = useAlert();

  const currentRequest = request.filter((request) => {
    return request.idFromFirestore === id;
  });

  const handleChangeStatus = async () => {
    if (currentRequest[0].status === "pendente") {
      const requestRef = doc(db, "Pedidos", id);
      await updateDoc(requestRef, {
        status: "realizado",
      });
      alert.success("O status do pedido foi alterado");
      setTimeout(() => {
        window.location.reload(true);
      }, 700);
    } else {
      alert.error("Não foi possivel alterar o status do pedido");
    }
  };
  return (
    <>
      <Header />
      <DetailsRequestContainer>
        {currentRequest.map((request) => (
          <DetailsRequestContent key={request.idFromFirestore}>
            <DataRequestContainer>
              <BsFillPersonFill size={25} />
              <DataRequestText>Cliente:</DataRequestText>
              <DataRequestText>{request.nameClient}</DataRequestText>
            </DataRequestContainer>
            <DataRequestContainer>
              <DataRequestText>Mesa:</DataRequestText>
              <DataRequestText>{request.tableClient}</DataRequestText>
            </DataRequestContainer>
            <DataRequestContainer>
              <DataRequestText>Status</DataRequestText>
              <DataRequestText>{request.status}</DataRequestText>
              {currentRequest[0].status === "pendente" ? (
                <BiX size={25} color="red" />
              ) : (
                <BiCheck size={25} color="green" />
              )}
            </DataRequestContainer>
            <div style={{ position: "relative", left: "25px" }}>
              <ul>
                {currentRequest[0].products.map((products) => (
                  <li>{products.name}</li>
                ))}
              </ul>
            </div>
            <button onClick={handleChangeStatus}>Marcar como realizado</button>
          </DetailsRequestContent>
        ))}
      </DetailsRequestContainer>
      <Footer />
    </>
  );
};
export default DetailsPage;
