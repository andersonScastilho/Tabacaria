import { useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillPersonFill, BsEyeSlashFill } from "react-icons/bs";
import { BiX, BiCheck } from "react-icons/bi";
import { GiTable } from "react-icons/gi";
import { useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { db } from "../../config/firebase.config";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";

import LoadingComponent from "../../component/loading/loading.component";
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
import { useMemo } from "react";

const RequestDatilsPage = () => {
  const toast = useToast();
  const { id } = useParams();
  const { register, handleSubmit } = useForm();

  const [currentRequest, setCurrentRequest] = useState();
  const [requestInRealTime, setRequestInRealTime] = useState();

  useMemo(() => {
    const unsub = onSnapshot(doc(db, "Pedidos", id), (doc) => {
      setRequestInRealTime(doc.data());
    });
  }, []);

  const currentRequestServed = currentRequest?.products.reduce((acc, item) => {
    return acc + item.servedQuantity;
  }, 0);

  const requestInRealTimeServed = requestInRealTime?.products.reduce(
    (acc, item) => {
      return acc + item.servedQuantity;
    },
    0
  );

  if (
    currentRequest?.status !== requestInRealTime?.status ||
    currentRequestServed !== requestInRealTimeServed
  ) {
    setCurrentRequest(requestInRealTime);
  }

  const allProductOfRequest = currentRequest?.products.every((item) => {
    return item.servedQuantity === item.solicitedQuantity;
  });

  const changeRequestStatusToEntregueAuto = async () => {
    const requestRef = doc(db, "Pedidos", id);
    await updateDoc(requestRef, {
      status: "Entregue",
    });
  };

  setTimeout(() => {
    if (
      allProductOfRequest === true &&
      currentRequest.formOfPayment !== "Pendente" &&
      currentRequest.status === "Pendente" &&
      allProductOfRequest === true
    ) {
      changeRequestStatusToEntregueAuto();
    }
  }, 5000);

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
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });
    } else {
      toast({
        title: "Não foi possivel",
        description: "Item ja foi finalizado",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });
    }
  };

  const handleFinalizeRequest = async (data) => {
    const requestRef = doc(db, "Pedidos", id);

    if (currentRequest.status === "Entregue") {
      if (
        currentRequest?.formOfPayment !== "false" &&
        currentRequest?.paymentStats === "Realizado"
      ) {
        try {
          await updateDoc(requestRef, {
            status: "Finalizado",
          });
        } catch (error) {
          console.log(error);
        }

        toast({
          title: "Status Pedido",
          description: "Status do pedido foi alterado",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-left",
        });
      } else if (
        currentRequest?.formOfPayment === "false" &&
        data.formOfPayment !== "false"
      ) {
        try {
          await updateDoc(requestRef, {
            status: "Finalizado",
            formOfPayment: data.formOfPayment,
            paymentStats: "Realizado",
          });
        } catch (error) {
          console.log(error);
        }

        toast({
          title: "Status Pedido",
          description: "Status do pedido foi alterado",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-left",
        });
      } else {
        toast({
          title: "Forma de Pagamento",
          description: "Forma de pagamento invalida",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-left",
        });
      }
    } else {
      toast({
        title: "Finalizar Pedido",
        description: "Finalize todos os itens primeiro",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });
    }
  };

  return (
    <>
      {currentRequest === undefined && <LoadingComponent />}
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
