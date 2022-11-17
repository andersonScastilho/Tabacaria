import { useContext } from "react";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { BiX, BiCheck } from "react-icons/bi";
import { GiTable } from "react-icons/gi";

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
  RequestProductsContent,
  RequestProductsContainer,
  TitleProductText,
  DataProducts,
  StatusText,
} from "./details.style";
import CustomButton from "../../component/custom-button/custom-button.component";
import { UserContext } from "../../contexts/user.context";

const DetailsPage = () => {
  const { request } = useContext(RequestContext);
  const { currentUser } = useContext(UserContext);
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
      alert.error("Pedido ja foi finalizado");
    }
  };

  return (
    <>
      <Header />
      <DetailsRequestContainer>
        {currentRequest.map((request) => (
          <DetailsRequestContent key={id}>
            <DataRequestContainer>
              <DataRequestText>
                <BsFillPersonFill color="black" size={25} />
              </DataRequestText>
              <DataRequestText>Cliente:</DataRequestText>
              <DataRequestText>{request.nameClient}</DataRequestText>
            </DataRequestContainer>
            <DataRequestContainer>
              <DataRequestText>
                <GiTable color="black" size={29} />
              </DataRequestText>
              <DataRequestText>Mesa:</DataRequestText>
              <DataRequestText>{request.tableClient}</DataRequestText>
            </DataRequestContainer>
            <DataRequestContainer>
              <DataRequestText>Status</DataRequestText>
              <StatusText status={request.status}>{request.status}</StatusText>
              {currentRequest[0].status === "pendente" ? (
                <DataRequestContainer key={request.staus}>
                  <DataRequestText style={{ position: "relative", top: "5px" }}>
                    <BiX size={25} color="red" />
                  </DataRequestText>
                </DataRequestContainer>
              ) : (
                <DataRequestText>
                  <BiCheck size={25} color="green" />
                </DataRequestText>
              )}
            </DataRequestContainer>
            <TitleProductText>Produtos</TitleProductText>
            <RequestProductsContainer>
              {currentRequest[0].products.map((products) => (
                <RequestProductsContent key={products.id}>
                  <DataProducts>Item: {products.name}</DataProducts>
                  <DataProducts>Quantidade: {products.quantity}</DataProducts>
                </RequestProductsContent>
              ))}
              <DataRequestText></DataRequestText>
            </RequestProductsContainer>
            Total Pedido: ${request.priceTotal},00
            {currentUser.email === "leosilvacast@gmail.com" ? (
              <CustomButton onClick={handleChangeStatus}>
                Finalizar Pedido
              </CustomButton>
            ) : null}
          </DetailsRequestContent>
        ))}
      </DetailsRequestContainer>
      <Footer />
    </>
  );
};
export default DetailsPage;
