import { useContext } from "react";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { BiX, BiCheck } from "react-icons/bi";
import { GiTable } from "react-icons/gi";
import { useForm } from "react-hook-form";

import { db } from "../../config/firebase.config";
import { doc, updateDoc } from "firebase/firestore";
import { UserContext } from "../../contexts/user.context";
import { RequestContext } from "../../contexts/request.context";

import InputErrorMessage from "../../component/input-error-messag/input-error.component";
import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";
import CustomButton from "../../component/custom-button/custom-button.component";

import {
  DataRequestContainer,
  DataRequestText,
  DetailsRequestContainer,
  DetailsRequestContent,
  RequestProductsContent,
  RequestProductsContainer,
  TitleProductText,
  StatusText,
  SelectOfPayment,
  OptionOfPayment,
} from "./details.style";

const DetailsPage = () => {
  const { request } = useContext(RequestContext);
  const { currentUser } = useContext(UserContext);
  const { id } = useParams();
  const alert = useAlert();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const currentRequest = request.filter((request) => {
    return request.idFromFirestore === id;
  });

  const handleChangeStatus = async (data) => {
    if (data.formOfPayment !== "false") {
      const requestRef = doc(db, "Pedidos", id);

      await updateDoc(requestRef, {
        status: "finalizado",
        formOfPayment: data.formOfPayment,
        paymentStats: "realizado",
      });

      alert.success("O status do pedido foi alterado");

      setTimeout(() => {
        window.location.reload(true);
      }, 700);
    } else {
      alert.error("Informe a forma de pagamento");
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
            {request.paymentStats === "pendente" ? (
              <>
                <SelectOfPayment
                  {...register("formOfPayment", {
                    required: true,
                    validate: "dinheiro" | "cartaoDebito" | "cartaoCredito",
                  })}
                >
                  <OptionOfPayment value="false"></OptionOfPayment>
                  <OptionOfPayment value="dinheiro">Dinheiro</OptionOfPayment>
                  <OptionOfPayment value="cartaoDebito">
                    Cartão - Debito
                  </OptionOfPayment>
                  <OptionOfPayment value="cartaoCredito">
                    Cartao - Credito
                  </OptionOfPayment>
                  <OptionOfPayment value="pix">Pix</OptionOfPayment>
                </SelectOfPayment>
              </>
            ) : null}
            <DataRequestContainer>
              <DataRequestText>Pagamento</DataRequestText>
              <StatusText status={request.paymentStats}>
                {request.paymentStats}
              </StatusText>
              {currentRequest[0].status === "pendente" ? (
                <DataRequestContainer key={request.id}>
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
            <DataRequestContainer>
              <DataRequestText>Status Pedido</DataRequestText>
              <StatusText status={request.status}>{request.status}</StatusText>
              {currentRequest[0].status === "pendente" ? (
                <DataRequestContainer key={request.id}>
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
                  <DataRequestText>Item: {products.name}</DataRequestText>
                  <DataRequestText>
                    Quantidade: {products.quantity}
                  </DataRequestText>
                  <DataRequestText>
                    Observação: {request.observation}
                  </DataRequestText>
                  <DataRequestContainer>
                    <DataRequestText>Status:</DataRequestText>
                    <StatusText status={products.status}>
                      {products.status}
                    </StatusText>
                  </DataRequestContainer>
                  <CustomButton>Finalizar item</CustomButton>
                </RequestProductsContent>
              ))}
            </RequestProductsContainer>
            Total Pedido: ${request.priceTotal}
            {currentUser.email === "leosilvacast@gmail.com" ? (
              <CustomButton onClick={() => handleSubmit(handleChangeStatus)()}>
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
