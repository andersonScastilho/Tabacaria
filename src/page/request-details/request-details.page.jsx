import { useContext } from "react";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { BsFillPersonFill, BsEyeSlashFill } from "react-icons/bs";
import { BiX, BiCheck } from "react-icons/bi";
import { GiTable } from "react-icons/gi";
import { useForm } from "react-hook-form";

import { db } from "../../config/firebase.config";
import { doc, updateDoc } from "firebase/firestore";
import { UserContext } from "../../contexts/user.context";
import { RequestContext } from "../../contexts/request.context";

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
} from "./request-details.style";

const RequestDatilsPage = () => {
  const { request, fetchPedidos } = useContext(RequestContext);
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

  const allProductOfRequest = currentRequest[0]?.products.every((item) => {
    return item.status === "realizado";
  });

  const handleFinalizeItem = async (product) => {
    const frankDocRef = doc(db, "Pedidos", id);

    let dataProducts = [...currentRequest[0].products];

    let dataProductSemCurrentProduct = dataProducts.filter((item) => {
      return item.id !== product.id;
    });

    let currentProduct = dataProducts.filter((item) => {
      return item.id === product.id;
    });

    await updateDoc(frankDocRef, {
      products: [
        ...dataProductSemCurrentProduct,
        (currentProduct = {
          id: product.id,
          imageUrl: product.imageUrl,
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          status: "realizado",
        }),
      ],
    });
    alert.success("O status do item foi alterado");
    fetchPedidos();
  };

  const handleFinalizeRequest = async (data) => {
    const requestRef = doc(db, "Pedidos", id);

    if (allProductOfRequest === true) {
      if (
        currentRequest[0].formOfPayment !== "false" &&
        currentRequest[0].paymentStats === "realizado"
      ) {
        await updateDoc(requestRef, {
          status: "finalizado",
        });
        alert.success("O status do pedido foi alterado");
      } else if (
        currentRequest[0].formOfPayment === "false" &&
        data.formOfPayment !== "false"
      ) {
        await updateDoc(requestRef, {
          status: "finalizado",
          formOfPayment: data.formOfPayment,
          paymentStats: "realizado",
        });

        alert.success("O status do pedido foi alterado");
      } else {
        alert.error("Informe a forma de pagamento");
      }
    } else {
      alert.error("Tem item pendente");
    }
    fetchPedidos();
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
              <DataRequestText>
                <BsEyeSlashFill />
              </DataRequestText>
              <DataRequestText>Observação:</DataRequestText>
              <DataRequestText>{request.observation}</DataRequestText>
            </DataRequestContainer>
            {request.paymentStats === "pendente" ? (
              <>
                <SelectOfPayment
                  {...register("formOfPayment", {
                    required: true,
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
              {currentRequest[0].paymentStats === "pendente" ? (
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
              {currentRequest[0].status === "em andamento" ? (
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
              {currentRequest[0].products.map((product) => (
                <RequestProductsContent key={product.id}>
                  {product.mark ? (
                    <DataRequestText>
                      Item: {product.mark} - {product.name}
                    </DataRequestText>
                  ) : (
                    <DataRequestText>Item: {product.name}</DataRequestText>
                  )}
                  <DataRequestText>
                    Quantidade: {product.quantity}
                  </DataRequestText>
                  <DataRequestContainer>
                    <DataRequestText>Status:</DataRequestText>
                    <StatusText status={product.status}>
                      {product.status}
                    </StatusText>
                  </DataRequestContainer>
                  <CustomButton onClick={() => handleFinalizeItem(product)}>
                    Finalizar item
                  </CustomButton>
                </RequestProductsContent>
              ))}
            </RequestProductsContainer>
            Total Pedido: ${request.priceTotal}
            {currentUser.email === "userteste@gmail.com" ? (
              <CustomButton
                onClick={() => handleSubmit(handleFinalizeRequest)()}
              >
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
export default RequestDatilsPage;
