import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsFillPersonFill, BsEyeSlashFill } from "react-icons/bs";
import { BiX, BiCheck } from "react-icons/bi";
import { GiTable } from "react-icons/gi";
import { useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { db } from "../../config/firebase.config";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
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
  const { request, fetchRequest } = useContext(RequestContext);

  const toast = useToast();
  useEffect(() => {
    fetchRequest();
  }, []);

  const { id } = useParams();

  const { register, handleSubmit } = useForm();

  const requestFiltred = request.filter((request) => {
    return request.idFromFirestore === id;
  });
  const [currentRequest, setCurrentRequest] = useState();

  useEffect(() => {
    if (currentRequest === undefined) {
      setCurrentRequest(requestFiltred[0]);
    } else {
      setCurrentRequest(requestInRealTime);
    }
  }, [requestFiltred]);

  const [requestInRealTime, setRequestInRealTime] = useState();

  onSnapshot(doc(db, "Pedidos", id), (doc) => {
    setRequestInRealTime(doc.data());
  });

  const allProductOfRequest = currentRequest?.products.every((item) => {
    return item.servedQuantity === item.solicitedQuantity;
  });

  const changeRequestStatusToEntregueAuto = async () => {
    const requestRef = doc(db, "Pedidos", id);
    await updateDoc(requestRef, {
      status: "Entregue",
    });
  };
  if (
    allProductOfRequest === true &&
    request.formOfPayment !== "pendente" &&
    currentRequest?.status !== "Entregue" &&
    currentRequest?.status !== "Finalizado"
  ) {
    if (allProductOfRequest === true) {
      changeRequestStatusToEntregueAuto();
    }
  }

  const handleFinalizeItem = async (product) => {
    const frankDocRef = doc(db, "Pedidos", id);

    let dataProducts = [...currentRequest?.products];

    let dataProductSemCurrentProduct = dataProducts.filter((item) => {
      return item.id !== product.id;
    });
    if (
      product.status !== "Realizado" &&
      product.servedQuantity !== product.solicitedQuantity
    ) {
      if (product.mark) {
        await updateDoc(frankDocRef, {
          products: [
            ...dataProductSemCurrentProduct,
            {
              id: product.id,
              imageUrl: product.imageUrl,
              name: product.name,
              price: product.price,
              solicitedQuantity: product.solicitedQuantity,
              servedQuantity: product.servedQuantity + 1,
              mark: product.mark,
            },
          ],
        });
      } else {
        await updateDoc(frankDocRef, {
          products: [
            ...dataProductSemCurrentProduct,
            {
              id: product.id,
              imageUrl: product.imageUrl,
              name: product.name,
              price: product.price,
              solicitedQuantity: product.solicitedQuantity,
              servedQuantity: product.servedQuantity + 1,
            },
          ],
        });
      }

      toast({
        title: "Status Item.",
        description: "Status foi alterado!",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-left",
      });
    } else {
      toast({
        title: "Não foi possivel",
        description: "Item ja foi finalizado",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-left",
      });
    }
  };

  const handleFinalizeRequest = async (data) => {
    const requestRef = doc(db, "Pedidos", id);

    if (allProductOfRequest === true) {
      if (
        currentRequest?.formOfPayment !== "false" &&
        currentRequest?.paymentStats === "Realizado"
      ) {
        await updateDoc(requestRef, {
          status: "Finalizado",
        });
        toast({
          title: "Status Pedido",
          description: "Status do pedido foi alterado",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top-left",
        });
      } else if (
        currentRequest?.formOfPayment === "false" &&
        data.formOfPayment !== "false"
      ) {
        await updateDoc(requestRef, {
          status: "Finalizado",
          formOfPayment: data.formOfPayment,
          paymentStats: "Realizado",
        });

        toast({
          title: "Status Pedido",
          description: "Status do pedido foi alterado",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top-left",
        });
      } else {
        toast({
          title: "Forma de Pagamento",
          description: "Forma de pagamento invalida",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top-left",
        });
      }
    } else {
      toast({
        title: "Finalizar Pedido",
        description: "Finalize todos os itens primeiro",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-left",
      });
    }
  };

  return (
    <>
      <Header />
      <DetailsRequestContainer>
        <DetailsRequestContent>
          <DataRequestContainer>
            <DataRequestText>
              <BsFillPersonFill color="black" size={25} />
            </DataRequestText>
            <DataRequestText>Cliente:</DataRequestText>
            <DataRequestText>{currentRequest?.nameClient}</DataRequestText>
          </DataRequestContainer>
          <DataRequestContainer>
            <DataRequestText>
              <GiTable color="black" size={29} />
            </DataRequestText>
            <DataRequestText>Mesa:</DataRequestText>
            <DataRequestText>{currentRequest?.tableClient}</DataRequestText>
          </DataRequestContainer>
          <DataRequestContainer>
            <DataRequestText>
              <BsEyeSlashFill />
            </DataRequestText>
            <DataRequestText>Observação:</DataRequestText>
            <DataRequestText>{currentRequest?.observation}</DataRequestText>
          </DataRequestContainer>
          {currentRequest?.paymentStats === "Pendente" ? (
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
            <StatusText status={currentRequest?.paymentStats}>
              {currentRequest?.paymentStats}
            </StatusText>
            {currentRequest?.paymentStats === "Pendente" ? (
              <DataRequestContainer>
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
            <StatusText status={currentRequest?.status}>
              {currentRequest?.status}
            </StatusText>
            {currentRequest?.status === "Pendente" ? (
              <DataRequestContainer>
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
            {currentRequest?.products.map((product) => (
              <RequestProductsContent key={product.id}>
                {product.mark ? (
                  <DataRequestText>{`item: ${product.mark} - ${product.name}`}</DataRequestText>
                ) : (
                  <DataRequestText>{`item: ${product.name}`}</DataRequestText>
                )}
                <DataRequestText>
                  Quantidade Solicitada: {product.solicitedQuantity}
                </DataRequestText>
                <DataRequestText>
                  Quantidade Atendida: {product.servedQuantity}
                </DataRequestText>
                <DataRequestContainer>
                  <DataRequestText>Status:</DataRequestText>
                  {product.servedQuantity === product.solicitedQuantity ? (
                    <StatusText status={"Realizado"}>Realizado</StatusText>
                  ) : (
                    <StatusText status={"Pendente"}>Em andamento</StatusText>
                  )}
                </DataRequestContainer>
                <CustomButton onClick={() => handleFinalizeItem(product)}>
                  Finalizar item
                </CustomButton>
              </RequestProductsContent>
            ))}
          </RequestProductsContainer>
          Total Pedido: ${currentRequest?.priceTotal}
          <CustomButton onClick={() => handleSubmit(handleFinalizeRequest)()}>
            Finalizar Pedido
          </CustomButton>
        </DetailsRequestContent>
      </DetailsRequestContainer>
      <Footer />
    </>
  );
};
export default RequestDatilsPage;
